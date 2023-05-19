import { fireEvent, render, screen } from '@testing-library/react';
import Post from '..';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});

describe('Teste de criacao de comentarios', () => {
    it('Postagem de primeiro comentario', () => {
        render(<Post />)
        const inputComent = screen.getByTestId('comentTextArea')
        const postButton = screen.getByTestId('post-button')

        fireEvent.change(inputComent, {
            target: {
                value: 'Nao gostuei, Asmei!!'
            }
        })
        fireEvent.click(postButton)

        fireEvent.change(inputComent, {
            target: {
                value: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            }
        })
        fireEvent.click(postButton)
        expect(screen.getAllByTestId('post-container').length).toBe(2)


    })
})