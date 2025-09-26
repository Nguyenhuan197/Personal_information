

// Save
export function Save(page: string) {
    if (!page) return false
    sessionStorage.setItem("Page__Personal", page);
    return true
}

// View
export function View() {
    const username = sessionStorage.getItem("Page__Personal");
    return !username ? false : username
}