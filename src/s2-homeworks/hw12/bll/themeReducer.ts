
type ThemePropsType = {
    themeId: number
}

type changeThemeACType = ReturnType<typeof changeThemeAC>
const changeThemeAC = (id: number) => {
    return {
        type: 'SET_THEME_ID', themeId: id
    } as const
}

const initState: ThemePropsType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeACType): ThemePropsType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {

                ...state,
                themeId: action.themeId
            }
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
