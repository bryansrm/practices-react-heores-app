import { mount, shallow } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";

describe('Prueba en <AppRouter />', () => {

    const initialContext = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
   
    test('debe mostrar login si no está autenticado', () => {
    
        const wrapper = mount( 
            <AuthContext.Provider value={ initialContext }>
                <AppRouter /> 
            </AuthContext.Provider>
        );

        // console.log(wrapper.html());
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar el componente marvel si está autenticado', () => {

        const initialContext = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Bryan'
            }
        }
       
        const wrapper = mount( 
            <AuthContext.Provider value={ initialContext }>
                <AppRouter /> 
            </AuthContext.Provider>
        );
        
        expect( wrapper.find('.navbar').exists() ).toBe( true );

    });    


});
