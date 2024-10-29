export default {
    methods: {
        BEM(name, mods = {}) {
            const result = [name]

            for (let [mod, value] of Object.entries(mods)) {
                if (value === true) {
                    result.push(`${name}_${CAMEL_TO_KEBAB(mod)}`)
                } else if (value) {
                    result.push(
                        `${name}_${CAMEL_TO_KEBAB(mod)}_${CAMEL_TO_KEBAB(value)}`
                    )
                }
            }

            return result.join(' ')
        }
    }
}
