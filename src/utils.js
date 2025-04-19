export function mergeClassNames(...className) {
    const array = className.reduce((previous, current) => {
        if (!current) {
            return previous
        }

        return [...previous, ...current.split(" ")]
    }, [])

    return array.join(" ")
}

export function getNextId(dataArray) {
    const maxId = dataArray.reduce(
        (previous, current) => Math.max(previous, current.id),
        -1
    )
    return maxId + 1
}
