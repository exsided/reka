export const useNumberChangeAnimation = (initialValue = 0, duration = 1000) => {
    const value = ref(0);
    const displayValue = ref(0);

    const animateCount = (targetValue: number) => {
        const startTime = Date.now();
        const startValue = displayValue.value;

        const animate = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;

            if (elapsedTime > duration) {
                displayValue.value = targetValue;
            } else {
                const fractionComplete = elapsedTime / duration;
                displayValue.value = Math.floor(
                    startValue + (targetValue - startValue) * fractionComplete
                );

                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    };

    watch(value, (newValue) => animateCount(newValue));

    onMounted(() => animateCount(initialValue));

    return {
        value,
        displayValue
    }
};
