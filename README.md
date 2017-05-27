# cz-taiga-smart-commit

Adaptador do Commitzen para o [Taiga](https://tree.taiga.io/support/integrations/changing-elements-status-via-commit-message/).

Projeto inspirado no cz-jira-smart-commit

![Screenshot](other/screenshot.png)

## Como usar

### Adicione o adaptador

Instale pelo npm 

```
npm install cz-taiga-smart-commit
```

Cite referencia no `.cz.json` do seu projeto 

```json
{
  "path": "node_modules/cz-taiga-smart-commit/"
}
```

ou aplique commitzen init
```
commitizen init cz-taiga-smart-commit
```

ou adicione no seu package.json
```json
"commitizen": {
      "path": "./index"
}
```

### Modo de trabalho

Ao invés de  `git commit -m 'Sua mensagem'`, utilize: `git cz` que o adaptador irá construir a mensagem para você, usando:
- type of commit
- scope of commit
- commit message
- commit long description
- breaking changes
- Taiga task number


