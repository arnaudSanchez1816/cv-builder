export function mergeClassNames(...className) {
    const array = className.reduce((previous, current) => {
        if (!current) {
            return previous
        }

        return [...previous, ...current.split(" ")]
    }, [])

    return array.join(" ")
}
