import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

export default (date) => {
    return dayjs(date)
        .endOf('year')
        .valueOf();
};
