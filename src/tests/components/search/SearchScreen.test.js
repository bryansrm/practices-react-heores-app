import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";

describe('Pruebas en <SearchScreen />', () => {
   
    test('debe de mostra correctamente con los valores por defecto', () => {
       
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        ); 

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar el hero Batman y el input con el valor del queryString', () => {
       
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search/?q=batman']}>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        ); 

        expect( wrapper.find('input').prop('value') ).toBe('batman');

    });
    
});
