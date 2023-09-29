import { render, screen, fireEvent } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    it('Deve postar 2 comentarios e verificar se eles foram renderizados', () => {
        render(<PostComment/>);
        const areaTexto = screen.getByTestId('text-comment')
        const botaoComentar = screen.getByTestId('comment-button')
        fireEvent.change(areaTexto, {target:{value: 'comentario 1'}})
        fireEvent.click(botaoComentar);
        fireEvent.change(areaTexto, {target:{value: 'comentario 2'}})
        fireEvent.click(botaoComentar);
        expect(screen.getByText('comentario 1')).toBeInTheDocument();
        expect(screen.getByText('comentario 2')).toBeInTheDocument();
    })
})
