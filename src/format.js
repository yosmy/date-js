import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

export default (date, format) => {
    return dayjs(date)
        .format(format);
};
