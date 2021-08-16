import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe('Pruebas en <DashboardRoutes />', () => {
   
    test('debe mostrarse correctamente', () => {

        const initialContext = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Bryan'
            }
        }
       
        const wrapper = mount( 
            <AuthContext.Provider value={ initialContext } >
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // console.log(wrapper.html());
        expect( wrapper.find('.navbar').exists() ).toBe(true);

    });
    

});
