import { mount, shallow } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen";

describe('Pruebas en <LoginScreen />', () => {
   
    test('debe de mostrarse correctamente', () => {

        const initialContext = {
            dispatch: jest.fn(),
            user: {
                logged: false
            }
        }
       
        const wrapper = mount( 
            <AuthContext.Provider value={ initialContext }>
                <LoginScreen /> 
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de realizar el dispatch y la navegación', () => {
       
        const initialContext = {
            dispatch: jest.fn(),
            user: {
                logged: false
            }
        }

        const history = {
            replace: jest.fn()
        }
       
        const wrapper = mount( 
            <AuthContext.Provider value={ initialContext }>
                <LoginScreen history={ history } /> 
            </AuthContext.Provider>
        );

        wrapper.find('button').prop('onClick')();

        expect( initialContext.dispatch ).toHaveBeenCalled();

    });
    
    

});
