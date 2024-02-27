export function createPages(pages: number[], pagesCount: number | undefined, currentPage: number) {
    if(pagesCount && pagesCount > 6) {
        if(currentPage > 3) {
            for (let i = currentPage-2; i <= currentPage+3; i++) {
                pages.push(i)
                if(i == pagesCount) break
            }
        }
        else {
            for (let i = 1; i <= 6; i++) {
                pages.push(i)
                if(i == pagesCount) break
            }
        }
    }  else {
        for (let i = 1; pagesCount && i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}