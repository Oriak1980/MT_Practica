import React, { useState } from "react";
import {
    Box,
    ListItemText,
    Typography,
    List,
    ListItemButton,
    Collapse,
    Stack,
    useTheme,
    Paper,
} from "@mui/material";
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

type TreeNode = {
    id: number;
    label: string;
    children?: TreeNode[];
    content?: React.ReactNode;
};

interface UniversalTreeProps {
    data: TreeNode[];
    direction?: 'row' | 'column';
}

const active = (
    node: TreeNode,
    selectedChildId: number | null
): boolean => {
    if (node.id === selectedChildId) return true;
    if (node.children) {
        return node.children.some((child) => active(child, selectedChildId));
    }
    return false
}



const TreeNodeItem: React.FC<{
    node: TreeNode;
    rootId: number;
    level?: number;
    direction?: "row" | "column";
    selectedChildId: number | null;
    onSelectChild: (rootId: number, id: number, content: React.ReactNode) => void;
    openNodeIdForRoot: number | null;
    setOpenNodeIdForRoot: (rootId: number, id: number | null) => void;
    selectedRoots: number[];
    toggleRootSelection: (rootId: number) => void;
}> = ({ node, rootId, level = 0, direction = 'row', selectedChildId, onSelectChild, openNodeIdForRoot, setOpenNodeIdForRoot, selectedRoots, toggleRootSelection }) => {
    const isOpen = openNodeIdForRoot === node.id;
    const isContentNode = !!node.content && !node.children;
    const isContentOpen = selectedChildId === node.id;
    const theme = useTheme()



    const handleClick = () => {
        if (node.children) {
            setOpenNodeIdForRoot(rootId, isOpen ? null : node.id);
            if (level === 0) toggleRootSelection(rootId)
        } else if (isContentNode) {
            onSelectChild(rootId, node.id, node.content || null);
        }
    };

    const on = active(node, selectedChildId);



    return (
        <>
            <ListItemButton selected={false} onClick={handleClick} sx={{ borderRadius: 1.5, px: 2, py: 1.3, my: 0.1, transition: 'all 0.2s ease' }}>
                <ListItemText primary={node.label} primaryTypographyProps={{ sx: {fontFamily: 'system-ui', fontWeight: 'bold', color: '#000000', fontSize: 20} }} />
                {node.children ? (isOpen ? <ExpandLessRoundedIcon fontSize="large" sx={{ color: '#000000'}} /> : <ExpandMoreRoundedIcon fontSize='large' sx={{ color: '#000000' }} />) : isContentNode ? (isContentOpen ? <ExpandLessRoundedIcon fontSize="large" sx={{ color: '#000000'}} /> : <ExpandMoreRoundedIcon fontSize="large" sx={{ color: '#000000'}} />) : null}
            </ListItemButton>
            {direction === 'column' && isContentNode && (
                <Collapse in={isContentOpen} timeout="auto" unmountOnExit>
                    <Box p={2} sx={{ pl: 2, py: 1,}}>
                        <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '0.95rem', }}>
                            {node.content}
                        </Typography>
                    </Box>
                </Collapse>
            )}
            {node.children && (
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {node.children.map((child) => (
                            <TreeNodeItem key={child.id} node={child} rootId={rootId} onSelectChild={onSelectChild} selectedChildId={selectedChildId} openNodeIdForRoot={openNodeIdForRoot} setOpenNodeIdForRoot={setOpenNodeIdForRoot} level={level + 1} direction={direction} selectedRoots={selectedRoots} toggleRootSelection={toggleRootSelection} />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
};

const UniversalTree: React.FC<UniversalTreeProps> = ({ data, direction = 'row' }) => {
    const [selectedContent, setSelectedContent] = useState<React.ReactNode>(null);
    const [selectedRoots, setSelectedRoots] = useState<number[]>([]);
    const [selectedChildren, setSelectedChildren] = useState<Record<number, number | null>>({});
    const [openNodeIds, setOpenNodeIds] = useState<Record<number, number | null>>({});

    const toggleRootSelection = (rootId: number) => {
        setSelectedRoots((prev) => {
            const isSelected = prev.includes(rootId);

            if (isSelected) {
                setSelectedChildren((prevChildren) => ({
                    ...prevChildren,
                    [rootId]: null,
                }));

                setOpenNodeIds((prevOpen) => ({
                    ...prevOpen,
                    [rootId]: null,
                }));

                setSelectedContent(null)
                return prev.filter((r) => r !== rootId);

            } else {
                return [...prev, rootId];
            }
        });
    };

    const setOpenNodeIdForRoot = (rootId: number, id: number | null) => {
        setOpenNodeIds((prev) => ({ ...prev, [rootId]: id }));
    }

    const handleSelectChild = (rootId: number, id: number, content: React.ReactNode) => {
        setSelectedChildren((prev) => {
            const current = prev[rootId] ?? null;
            const next = current === id ? null : id;
            return { ...prev, [rootId]: next };
        })

        setSelectedContent(() => {
            const currentSelected = selectedChildren[rootId] ?? null;
            const willBeSelected = currentSelected === id ? null : id;
            return willBeSelected ? content : null;
        });
        setSelectedRoots((prev) => (prev.includes(rootId) ? prev : [...prev, rootId]));
    };


    return (
        <Stack display='flex' gap={1} direction={direction} sx={{ my: 0, p: 1.5, borderRadius: 3, transition: 'all 0.3s ease', width: '100%', gap:3 }}>
            {data.map((root) => {
                const selectedChildId = selectedChildren[root.id] ?? null;
                const openId = openNodeIds[root.id] ?? null;
                return (
                    <Paper key={root.id} elevation={0} sx={{ borderRadius: 1, p: 0, backgroundColor: '#C29B33' }}>
                        <List sx={{ padding: 0.5 }}>
                            <TreeNodeItem
                                node={root}
                                rootId={root.id}
                                onSelectChild={handleSelectChild}
                                selectedChildId={selectedChildId}
                                openNodeIdForRoot={openId}
                                setOpenNodeIdForRoot={setOpenNodeIdForRoot}
                                selectedRoots={selectedRoots}
                                toggleRootSelection={toggleRootSelection}
                                direction={direction}
                            />
                        </List>
                    </Paper>
                )

            })}

            {/* Área de contenido */}
            {direction === 'row' && (
                <Box flex={1} p={4} borderRadius={2} sx={{}}>
                    <Typography variant="body1" sx={{ textOverflow: 'ellipsis', color: '#000000' }}>
                        {selectedContent ? (
                            selectedContent
                        ) : (
                            <Typography variant="body2" color='textDisabled' sx={{ fontStyle: 'italic', }}>
                                Selecciona un elemento para ver información...
                            </Typography>
                        )}
                    </Typography>
                </Box>
            )}
        </Stack>
    );
};

export default UniversalTree;



