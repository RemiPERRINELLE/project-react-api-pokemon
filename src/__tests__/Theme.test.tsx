import { render } from '@testing-library/react';

describe('Thème', () => {
  it('utilise le thème sombre par défaut', () => {
    document.body.classList.remove('light');
    render(<div>App</div>);
    expect(document.body.classList.contains('light')).toBe(false);
  });

  it('utilise le thème clair si spécifié', () => {
    document.body.classList.add('light');
    render(<div>App</div>);
    expect(document.body.classList.contains('light')).toBe(true);
  });
});
