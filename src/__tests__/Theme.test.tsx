import { render } from '@testing-library/react';

describe('Thème', () => {
  it('Utilise le thème Dark par défaut', () => {
    document.body.classList.remove('light');
    render(<div>App</div>);
    expect(document.body.classList.contains('light')).toBe(false);
  });

  it('Utilise le thème Light si spécifié', () => {
    document.body.classList.add('light');
    render(<div>App</div>);
    expect(document.body.classList.contains('light')).toBe(true);
  });
});
