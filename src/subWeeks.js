import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

export default (date, amount) => {
    return dayjs(date)
        .subtract(amount, 'week')
        .valueOf();
};
