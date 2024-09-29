<script>
import { differenceInDays } from 'date-fns';

export default {
    props: {
        lastUpdate: {
            type: String,
            required: true
        }
    },
    methods: {
        getTimeAgo(date) {
            const daysAgo = differenceInDays(new Date(), new Date(date));
            return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
        },
    }
}
</script>
   