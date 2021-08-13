import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Tests in authReducer', () => {
   
    test('debe retornar el estado por defecto', () => {

        const initialState = { logged: false };
        
        const state = authReducer(initialState, { type: ''});
        
        expect( state ).toEqual( initialState );

    });

    test('debe de autenticar y colocar el name del usuario', () => {

        const initialState = { logged: false };
        const action = { 
            type: types.login, 
            payload: { name: 'Bryan'}
        }
        
        const { name, logged } = authReducer(initialState, action);
        
        expect( name ).toBe( 'Bryan' );
        expect( logged ).toBe( true );
        
    });
    
    test('debe de borrar el name del usuario y logged en false', () => {
        
        const initialState = { logged: true, name: 'Bryan' };

        // LOGOUT
        const action = { 
            type: types.logout
        }
        
        const state = authReducer(initialState, action);
        
        expect( state.logged ).toBe( false );
        
    });
    
    

});
