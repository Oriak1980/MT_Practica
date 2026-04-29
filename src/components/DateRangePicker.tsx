import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/es';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import Popover from '@mui/material/Popover';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';

dayjs.locale('es');

type DateRangeValue = [Dayjs | null, Dayjs | null];

// A static date-range picker with quick-selection list and apply/cancel actions.
export default function DateRangePicker({
    onApply,
    onCancel,
    onButtonLabelChange,
    value: valueProp,
}: {
    onApply?: (range: DateRangeValue) => void;
    onCancel?: () => void;
    onButtonLabelChange?: (label: string) => void;
    value?: DateRangeValue;
}) {
    const [value, setValue] = React.useState<DateRangeValue>(() => valueProp ?? [null, null]);
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const [hoveredDay, setHoveredDay] = React.useState<Dayjs | null>(null);
    const scrollRef = React.useRef<HTMLDivElement | null>(null);
    const monthRefs = React.useRef<Record<string, HTMLDivElement | null>>({});

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const quickRanges: Array<{ label: string; range: DateRangeValue }> = [
        { label: 'Hoy', range: [dayjs(), dayjs()] },
        { label: 'Ayer', range: [dayjs().subtract(1, 'day'), dayjs().subtract(1, 'day')] },
        { label: 'Últimos 7 días', range: [dayjs().subtract(6, 'day'), dayjs()] },
        { label: 'Últimos 30 días', range: [dayjs().subtract(29, 'day'), dayjs()] },
        { label: 'Hace 3 Meses', range: [dayjs().subtract(3, 'month').startOf('month'), dayjs()] },
        { label: 'Hace 6 Meses', range: [dayjs().subtract(6, 'month').startOf('month'), dayjs()] },
        { label: 'Hace 1 año', range: [dayjs().subtract(1, 'year'), dayjs()] },
        { label: 'Hace 5 años', range: [dayjs().subtract(5, 'year'), dayjs()] },
        { label: 'Rango Personalizado', range: [null, null] },
    ];

    const formatRange = ([start, end]: DateRangeValue) => {
        if (!start || !end) return '';
        return `${start.format('DD/MM/YYYY')} – ${end.format('DD/MM/YYYY')}`;
    };

    const rangesAreEqual = (a: DateRangeValue, b: DateRangeValue) => {
        const sameStart = (!a[0] && !b[0]) || (!!a[0] && !!b[0] && a[0].isSame(b[0], 'day'));
        const sameEnd = (!a[1] && !b[1]) || (!!a[1] && !!b[1] && a[1].isSame(b[1], 'day'));
        return sameStart && sameEnd;
    };

    React.useEffect(() => {
        if (!valueProp) return;
        setValue((prev) => (rangesAreEqual(prev, valueProp) ? prev : valueProp));
    }, [valueProp]);

    const handleCalendarSelect = (newDay: Dayjs | null) => {
        if (!newDay) return;
        const [start, end] = value;
        if (!start || (start && end)) {
            setValue([newDay, null]);
            return;
        }

        if (newDay.isBefore(start, 'day')) {
            setValue([newDay, start]);
        } else {
            setValue([start, newDay]);
        }
    };

    const currentMonth = React.useMemo(() => dayjs().startOf('month'), []);
    const months = React.useMemo(() => {
        const startMonth = currentMonth.subtract(6, 'month');
        return Array.from({ length: 13 }, (_, idx) => startMonth.add(idx, 'month'));
    }, [currentMonth]);

    React.useEffect(() => {
        if (!anchorEl) return;
        const key = currentMonth.format('YYYY-MM');
        const frame = requestAnimationFrame(() => {
            const target = monthRefs.current[key];
            target?.scrollIntoView({ block: 'start' });
        });
        return () => cancelAnimationFrame(frame);
    }, [anchorEl, currentMonth]);

    const weeksOfMonth = (month: Dayjs) => {
        const start = month.startOf('month').startOf('week');
        return Array.from({ length: 42 }, (_, idx) => start.add(idx, 'day'));
    };

    const buttonLabel = React.useMemo(() => {
        const [start, end] = value;
        const formatSingle = (date: Dayjs) => {
            const day = date.format('D');
            const monthRaw = date.format('MMM').replace('.', '');
            const month = monthRaw.charAt(0).toUpperCase() + monthRaw.slice(1);
            const year = date.format('YY');
            return `${day} ${month} ${year}`;
        };

        if (start && end) {
            if (start.isSame(end, 'day')) {
                return formatSingle(start);
            }
            return `${formatSingle(start)} - ${formatSingle(end)}`;
        }

        if (start) {
            return formatSingle(start);
        }

        return 'Fecha';
    }, [value]);

    React.useEffect(() => {
        onButtonLabelChange?.(buttonLabel);
    }, [buttonLabel, onButtonLabelChange]);

    return (
        <Box>
            <Button variant="contained" startIcon={<CalendarTodayRoundedIcon sx={{color:'#D04234'}}/>} sx={{backgroundColor: '#ffffff', color: '#828287', fontFamily: 'system-ui', width: '100%', maxWidth: '700px', fontSize: { xs: '16px', sm: '20px' }, fontWeight:'bold', borderRadius: '50px'}} onClick={(e) => setAnchorEl(e.currentTarget)}>
                {buttonLabel === 'Fecha' ? 'Filtrar por fecha (calendario)' : `Filtrar por fecha (${buttonLabel})`}
            </Button>
            {isMobile ? (
                <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={() => { setAnchorEl(null); onCancel?.(); }}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    sx={{ zIndex: (theme) => theme.zIndex.tooltip + 2 }}
                    slotProps={{
                        paper: {
                            sx: {
                                zIndex: (theme) => theme.zIndex.tooltip + 2,
                            },
                        },
                    }}>
                        <Card sx={{ display: 'column', width: '100%', p: { xs: 1.5 } }}>
                            <Box sx={{ display: 'flex', width: '100%', flexDirection: { xs: 'column', sm: 'row' } }}>
                                <Box sx={{ width: { xs: '100%', sm: 170 }, borderRight: theme => ({ sm: `1px solid ${theme.palette.divider}` }), borderBottom: { xs: theme => `1px solid ${theme.palette.divider}`, sm: 'none' } }}>
                                    <List dense disablePadding>
                                        {quickRanges.map((opt) => {
                                            const [rangeStart, rangeEnd] = opt.range;
                                            const [currentStart, currentEnd] = value;
                                            const bothNull = !currentStart && !currentEnd && !rangeStart && !rangeEnd;
                                            const sameRange = Boolean(
                                                currentStart && currentEnd && rangeStart && rangeEnd &&
                                                currentStart.isSame(rangeStart, 'day') &&
                                                currentEnd.isSame(rangeEnd, 'day')
                                            );

                                            return (
                                                <ListItemButton
                                                    key={opt.label}
                                                    selected={bothNull || sameRange}
                                                    onClick={() => setValue(opt.range)}
                                                    sx={{ py: 0.5, px: 1.5 }}
                                                >
                                                    <ListItemText
                                                        primary={opt.label}
                                                        primaryTypographyProps={{ fontSize: 13 }}
                                                    />
                                                </ListItemButton>
                                            );
                                        })}
                                    </List>
                                </Box>
                                <Box sx={{ flex: 1, p: 1.25 }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <Box sx={{ display: 'flex', gap: 1 }}>
                                            <DatePicker
                                                label="Inicio"
                                                value={value[0]}
                                                onChange={(newVal) => setValue([newVal, value[1]])}
                                                format="DD/MM/YYYY"
                                                enableAccessibleFieldDOMStructure={false}
                                                slots={{ textField: TextField }}
                                                slotProps={{
                                                    textField: { 
                                                        size: 'small', 
                                                        sx: { 
                                                            minWidth: 140,
                                                            '& .MuiInputLabel-root.Mui-focused': {
                                                                color: '#D04234',
                                                            },
                                                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: '#D04234',
                                                            },
                                                            '& .MuiOutlinedInput-root.Mui-focused .MuiInputAdornment-root svg': {
                                                                color: '#D04234',
                                                            },
                                                        } 
                                                    },
                                                    popper: { sx: { zIndex: (theme) => theme.zIndex.tooltip + 3 } },
                                                }}
                                            />
                                            <DatePicker
                                                label="Fin"
                                                value={value[1]}
                                                onChange={(newVal) => setValue([value[0], newVal])}
                                                format="DD/MM/YYYY"
                                                enableAccessibleFieldDOMStructure={false}
                                                slots={{ textField: TextField }}
                                                slotProps={{
                                                    textField: { 
                                                        size: 'small', 
                                                        sx: { 
                                                            minWidth: 140,
                                                            '& .MuiInputLabel-root.Mui-focused': {
                                                                color: '#D04234',
                                                            },
                                                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                borderColor: '#D04234',
                                                            },
                                                            '& .MuiOutlinedInput-root.Mui-focused .MuiInputAdornment-root svg': {
                                                                color: '#D04234',
                                                            },
                                                        } 
                                                    },
                                                    popper: { sx: { zIndex: (theme) => theme.zIndex.tooltip + 3 } },
                                                }}
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                mt: 2,
                                                maxHeight: 280,
                                                overflowY: 'auto',
                                                pr: 0.5,
                                            }}
                                            ref={scrollRef}
                                        >
                                            {months.map((month) => {
                                                const monthKey = month.format('YYYY-MM');
                                                return (
                                                    <Box
                                                        key={monthKey}
                                                        sx={{ mb: 3 }}
                                                        ref={(node: HTMLDivElement | null) => {
                                                            monthRefs.current[monthKey] = node;
                                                        }}
                                                    >
                                                        <Typography variant="subtitle2" sx={{ mb: 0.5, fontSize: 13 }}>
                                                            {month.format('MMMM YYYY')}
                                                        </Typography>
                                                        <Box
                                                            sx={{
                                                                display: 'grid',
                                                                gridTemplateColumns: 'repeat(7, 1fr)',
                                                                textAlign: 'center',
                                                                rowGap: 0.75,
                                                                columnGap: 0.4,
                                                                fontSize: 11,
                                                                color: 'text.secondary',
                                                            }}
                                                        >
                                                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((label, idx) => (
                                                                <Box key={`${month.format('YYYY-MM')}-${label}-${idx}`} sx={{ fontWeight: 600 }}>
                                                                    {label}
                                                                </Box>
                                                            ))}
                                                            {weeksOfMonth(month).map((day) => {
                                                                const [start, end] = value;
                                                                const isCurrentMonth = day.month() === month.month();
                                                                const isStart = !!start && day.isSame(start, 'day');
                                                                const isEnd = !!end && day.isSame(end, 'day');
                                                                const rangeEnd = end || hoveredDay;
                                                                const isBetween =
                                                                    !!start && !!rangeEnd && day.isAfter(start, 'day') && day.isBefore(rangeEnd, 'day');

                                                                return (
                                                                    <Box
                                                                        key={day.toString()}
                                                                        onMouseEnter={() => setHoveredDay(day)}
                                                                        onClick={() => handleCalendarSelect(day)}
                                                                        sx={{
                                                                            width: 30,
                                                                            height: 30,
                                                                            mx: 'auto',
                                                                            borderRadius: isStart || isEnd ? '50%' : 2,
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            cursor: 'pointer',
                                                                            bgcolor: isStart || isEnd
                                                                                ? '#D04234'
                                                                                : isBetween
                                                                                    ? 'rgba(208, 66, 52, 0.15)'
                                                                                    : 'transparent',
                                                                            color: isStart || isEnd
                                                                                ? '#ffffff'
                                                                                : isBetween
                                                                                    ? '#D04234'
                                                                                    : isCurrentMonth
                                                                                        ? 'text.primary'
                                                                                        : 'text.disabled',
                                                                            opacity: isCurrentMonth ? 1 : 0.5,
                                                                            transition: 'background-color 0.2s ease',
                                                                        }}
                                                                    >
                                                                        {day.date()}
                                                                    </Box>
                                                                );
                                                            })}
                                                        </Box>
                                                    </Box>
                                                );
                                            })}
                                        </Box>
                                    </LocalizationProvider>
                                </Box>
                            </Box>
                            <Divider />
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 1.5 }}>
                                <Typography variant="caption" color="text.secondary">{formatRange(value)}</Typography>
                                <Box sx={{ ml: 2 }}>
                                    <Button size="small" onClick={() => { setAnchorEl(null); onCancel?.(); }}>Cancel</Button>
                                    <Button variant="contained" size="small" onClick={() => { setAnchorEl(null); onApply?.(value); }} sx={{ ml: 1 }}>
                                        Apply
                                    </Button>
                                </Box>
                            </Box>
                        </Card>
                </Popover>
            ) : (
                <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={() => { setAnchorEl(null); onCancel?.(); }}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    sx={{ zIndex: (theme) => theme.zIndex.tooltip + 2 }}
                    slotProps={{
                        paper: {
                            sx: {
                                zIndex: (theme) => theme.zIndex.tooltip + 2,
                            },
                        },
                    }}
                >
                    <Card sx={{ display: 'column', width: '100%', maxWidth: { sm: '100%', md: 520 }, p: { xs: 1.5 }, backgroundColor:'#ffffff' }}>
                        <Box sx={{ display: 'flex', width: '100%' }}>
                            <Box sx={{ width: 170, borderRight:`1px solid #D04234` }}>
                                <List dense disablePadding>
                                    {quickRanges.map((opt) => {
                                        const [rangeStart, rangeEnd] = opt.range;
                                        const [currentStart, currentEnd] = value;
                                        const bothNull = !currentStart && !currentEnd && !rangeStart && !rangeEnd;
                                        const sameRange = Boolean(
                                            currentStart && currentEnd && rangeStart && rangeEnd &&
                                            currentStart.isSame(rangeStart, 'day') &&
                                            currentEnd.isSame(rangeEnd, 'day')
                                        );

                                        return (
                                            <ListItemButton
                                                key={opt.label}
                                                selected={bothNull || sameRange}
                                                onClick={() => setValue(opt.range)}
                                                sx={{ py: 0.5, px: 1.5, borderRadius: 15, '&.Mui-selected': { bgcolor: '#D04234', color: '#ffffff', '&:hover':{backgroundColor:'#D04234'} }, '&:hover': { bgcolor: '#d041346c' }, textAlign:'center', width:'95%', }}
                                            >
                                                <ListItemText
                                                    primary={opt.label}
                                                    primaryTypographyProps={{ fontSize: 13 }}
                                                />
                                            </ListItemButton>
                                        );
                                    })}
                                </List>
                            </Box>
                            <Box sx={{ flex: 1, p: 1.25 }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <DatePicker
                                            label="Inicio"
                                            value={value[0]}
                                            onChange={(newVal) => setValue([newVal, value[1]])}
                                            format="DD/MM/YYYY"
                                            enableAccessibleFieldDOMStructure={false}
                                            slots={{ textField: TextField }}
                                            slotProps={{
                                                textField: { 
                                                    size: 'small', 
                                                    sx: { 
                                                        minWidth: 140,
                                                        '& .MuiInputLabel-root.Mui-focused': {
                                                            color: '#D04234',
                                                        },
                                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                            borderColor: '#D04234',
                                                        },
                                                        '& .MuiOutlinedInput-root.Mui-focused .MuiInputAdornment-root svg': {
                                                            color: '#D04234',
                                                        },
                                                    } 
                                                },
                                                popper: { sx: { zIndex: (theme) => theme.zIndex.tooltip + 3 } },
                                            }}
                                        />
                                        <DatePicker
                                            label="Fin"
                                            value={value[1]}
                                            onChange={(newVal) => setValue([value[0], newVal])}
                                            format="DD/MM/YYYY"
                                            enableAccessibleFieldDOMStructure={false}
                                            slots={{ textField: TextField }}
                                            slotProps={{
                                                textField: { 
                                                    size: 'small', 
                                                    sx: { 
                                                        minWidth: 140,
                                                        '& .MuiInputLabel-root.Mui-focused': {
                                                            color: '#D04234',
                                                        },
                                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                            borderColor: '#D04234',
                                                        },
                                                        '& .MuiOutlinedInput-root.Mui-focused .MuiInputAdornment-root svg': {
                                                            color: '#D04234',
                                                        },
                                                    } 
                                                },
                                                popper: { sx: { zIndex: (theme) => theme.zIndex.tooltip + 3 } },
                                            }}
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            mt: 2,
                                            maxHeight: 280,
                                            overflowY: 'auto',
                                            pr: 0.5,
                                        }}
                                        ref={scrollRef}
                                    >
                                        {months.map((month) => {
                                            const monthKey = month.format('YYYY-MM');
                                            return (
                                                <Box
                                                    key={monthKey}
                                                    sx={{ mb: 3 }}
                                                    ref={(node: HTMLDivElement | null) => {
                                                        monthRefs.current[monthKey] = node;
                                                    }}
                                                >
                                                    <Typography variant="subtitle2" sx={{ mb: 0.5, fontSize: 13 }}>
                                                        {month.format('MMMM YYYY')}
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            display: 'grid',
                                                            gridTemplateColumns: 'repeat(7, 1fr)',
                                                            textAlign: 'center',
                                                            rowGap: 0.75,
                                                            columnGap: 0.4,
                                                            fontSize: 11,
                                                            color: 'text.secondary',
                                                        }}
                                                    >
                                                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((label, idx) => (
                                                            <Box key={`${month.format('YYYY-MM')}-${label}-${idx}`} sx={{ fontWeight: 600 }}>
                                                                {label}
                                                            </Box>
                                                        ))}
                                                        {weeksOfMonth(month).map((day, idx) => {
                                                            const [start, end] = value;
                                                            const isCurrentMonth = day.month() === month.month();
                                                            const isStart = !!start && day.isSame(start, 'day');
                                                            const isEnd = !!end && day.isSame(end, 'day');
                                                            const rangeEnd = end || hoveredDay;
                                                            const isBetween =
                                                                !!start && !!rangeEnd && day.isAfter(start, 'day') && day.isBefore(rangeEnd, 'day');

                                                            return (
                                                                <Box
                                                                    key={`${day.format('YYYY-MM-DD')}-${idx}`}
                                                                    onMouseEnter={() => setHoveredDay(day)}
                                                                    onClick={() => handleCalendarSelect(day)}
                                                                    sx={{
                                                                        width: 30,
                                                                        height: 30,
                                                                        mx: 'auto',
                                                                        borderRadius: isStart || isEnd ? '50%' : 2,
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        cursor: 'pointer',
                                                                        bgcolor: isStart || isEnd
                                                                            ? '#D04234'
                                                                            : isBetween
                                                                                ? 'rgba(208, 66, 52, 0.15)'
                                                                                : 'transparent',
                                                                        color: isStart || isEnd
                                                                            ? '#ffffff'
                                                                            : isBetween
                                                                                ? '#D04234'
                                                                                : isCurrentMonth
                                                                                    ? 'text.primary'
                                                                                    : 'text.disabled',
                                                                        opacity: isCurrentMonth ? 1 : 0.5,
                                                                        transition: 'background-color 0.2s ease',
                                                                    }}
                                                                >
                                                                    {day.date()}
                                                                </Box>
                                                            );
                                                        })}
                                                    </Box>
                                                </Box>
                                            );
                                        })}
                                    </Box>
                                </LocalizationProvider>
                            </Box>
                        </Box>
                        <Divider sx={{borderColor:'#D04234'}}/>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 1.5 }}>
                            <Typography variant="caption" color='#828287'>{formatRange(value)}</Typography>
                            <Box sx={{ ml: 2 }}>
                                <Button size="small" variant='outlined' sx={{borderColor: '#D04234', color: '#D04234', fontFamily: 'system-ui', fontWeight: 'bold', borderRadius: '50px'}} onClick={() => { setAnchorEl(null); onCancel?.(); }}>Cancelar</Button>
                                <Button variant="contained" size="small" sx={{backgroundColor: '#D04234', color: '#ffffff', fontFamily: 'system-ui', fontWeight: 'bold', borderRadius: '50px', ml:1}} onClick={() => { setAnchorEl(null); onApply?.(value); }}>
                                    Aplicar
                                </Button>
                            </Box>
                        </Box>
                    </Card>
                </Popover>
            )}
        </Box>
    );
}
