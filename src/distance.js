import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/es';

dayjs.locale('es');

export default (date) => {
    dayjs.extend(relativeTime);

    return dayjs(date)
        .fromNow()
        .valueOf();
};
