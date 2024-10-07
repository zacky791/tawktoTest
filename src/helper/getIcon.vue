<script>
import { ref } from 'vue';
import playIcon from '../assets/icons/play.svg';
import messageIcon from '../assets/icons/message.svg';
import monitorIcon from '../assets/icons/monitor.svg';
import linkIcon from '../assets/icons/link.svg';
import diamondIcon from '../assets/icons/diamond.svg';
import cartIcon from '../assets/icons/shopping-cart.svg';

export default {
    setup() {
        const iconMap = ref({
            play: playIcon,
            comment: messageIcon,
            deskop: monitorIcon,
            link: linkIcon,
            gem: diamondIcon,
            "shopping-cart": cartIcon,
        });

        const getIcon = (iconName) => {
            return iconMap.value[iconName] || null;
        };

        return {
            getIcon,
        };
    },
};
</script>
