import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import '@testing-library/jest-dom';

import { HeroScreen } from "../../../components/hero/HeroScreen";

describe('Prueba en <HeroScreen >', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
    }

    
    test('debe de mostrar el componenente redirect si no hay argumentos en el URL', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={ history} />
            </MemoryRouter>
        );

        expect( wrapper.find('Redirect').exists() ).toBe(true);

    });

    test('debe de mostrar un hero si el parámetro existe', () => {
       
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={ HeroScreen } /> 
            </MemoryRouter>
        );

        expect( wrapper.find('.row').exists() ).toBe( true );

    });

    test('debe de regresar a la pantalla anterior con PUSH', () => {
       
        const _history = {
            ...history,
            length: 1
            
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={ () => <HeroScreen history={ _history } /> } /> 
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( _history.push ).toHaveBeenCalledWith('/');
        expect( _history.goBack ).not.toHaveBeenCalled();

    });

    test('debe de regresar a la pantalla anterior goBack', () => {
       
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={ () => <HeroScreen history={ history } /> } /> 
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( history.goBack ).toHaveBeenCalledTimes(1);
        expect( history.push ).not.toHaveBeenCalled();

    });
    
    test('debe de llamar el redirect si el hero no existe', () => {
       
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider123']}>
                <Route path="/hero/:heroId" component={ () => <HeroScreen history={ history } /> } /> 
            </MemoryRouter>
        );

        // expect( wrapper.find('Redirect').exists() ).toBe(true);
        expect( wrapper.text() ).toBe('');

    });
    
});

