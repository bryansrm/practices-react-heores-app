import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router-dom";
import '@testing-library/jest-dom';

import { AuthContext } from "../../../auth/AuthContext";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from "../../../types/types";

describe('Pruebas en <Navbar />', () => {

    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    }

    const initialContext = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Bryan'
        }
    }

    afterEach(() => {
        jest.clearAllMocks()
    });
   
    const wrapper = mount( 
        <AuthContext.Provider value={ initialContext } >
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );
    
    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Bryan');
        
    });

    test('debe de llamar el logout y usar el history', () => {
       
        wrapper.find('button').prop('onClick')();

        expect( initialContext.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        }); 

        expect( historyMock.replace ).toHaveBeenCalledWith('/login');

    });
    
    
});


