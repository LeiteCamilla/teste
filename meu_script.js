PennController.ResetPrefix(null);

Sequence("Participante","Instrucoes",randomize("Experimento"),SendResults(),"Final");

Header(

  defaultText
  .css(""font-size","1.2em")
  .print()
  ,
  
  defaultTextInput
  .css(""font-size","1.2em")
  .print()
  ,

  defaultButton
  .css(""font-size","1.2em")
  .print()
  .center()
  .wait()
  
)

newTrial("Participantes",

newText("<p>Bem-vindos!</p>)
        ,
        newText("<p>Neste Experimento, você vai ouvir uma frase e depois deve escolher a melhor opção de interpretação para ela.</p>)
               ,
                newText("<p>Por favor, escreva seu NOME COMPLETO na caixa abaixo.</p>)
                        ,
                        newTextInput("Nome")
                        ,

                        newText
         )
