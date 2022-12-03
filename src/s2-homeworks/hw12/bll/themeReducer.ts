type ThemePropsType = {
    themeId: number
}

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

//Варианты типизации
//1:
/*type changeThemeType = ReturnType<typeof changeThemeIdAC>
const changeThemeIdAC = (id: number) => {
    return {
        type: 'SET_THEME_ID', id
    } as const
}*/

//2:
type changeThemeType = { type: 'SET_THEME_ID', id: number }

export const changeThemeId = (id: number): changeThemeType => ({type: 'SET_THEME_ID', id}) // fix any
