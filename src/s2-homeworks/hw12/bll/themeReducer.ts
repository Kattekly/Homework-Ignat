
type ThemePropsType = {
    themeId: number
}

type changeThemeType = { type: 'SET_THEME_ID', id: number }

const initState: ThemePropsType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeType): ThemePropsType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.id
            }
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeType => ({ type: 'SET_THEME_ID', id }) // fix any
