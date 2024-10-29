import { useMainStore } from '~/store/main';

export default {
	setup() {
		const mainStore = useMainStore();

		const scrollBarWidth = ref(0);

		const disableScroll = computed(() => !!mainStore.disableScrollUids.length);

		const checkScrollDisable = () => {
			if (process.server)
				return;

			const page = document.querySelector('html');

			if (disableScroll.value) {
				page.style.width = `calc(100% - ${scrollBarWidth.value}px)`;
				page.classList.add('disable-scroll');
			}
			else {
				page.style.width = '';
				page.classList.remove('disable-scroll');
			}
		};

		const getScrollBarWidth = () => {
			const div = document.createElement('div');

			div.style.overflowY = 'scroll';
			div.style.width = '50px';
			div.style.height = '50px';

			document.body.append(div);

			scrollBarWidth.value = div.offsetWidth - div.clientWidth;

			div.remove();
		};

		watch(disableScroll, () => checkScrollDisable());

		onMounted(() => {
			getScrollBarWidth();
			checkScrollDisable();
		});

		return {
			onMounted,
			scrollBarWidth,
			disableScroll,
			checkScrollDisable,
			getScrollBarWidth,
		};
	}
};
