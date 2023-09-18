PennController.ResetPrefix(null);
PennController.DebugOff();

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

                        newText("<p>Agora selecione sua ESCOLARIDADE na caixa abaixo e aperte o botão 'Iniciar' para começar</p>)
                                ,
                                newDropDown("Escolaridade", "Selecione sua escolaridade")
                                .add("Médio completo","Superior em curso", "Superior completo", "Pós-graduação")
                                .css("font-size", "1.2em")
                                .print()
                                .log()
                        ,

                                newButton("Iniciar")
                                ,

  newVar("NOME")
    .global()
    .set(getTxtInput("Nome"))
    
  )

.log("NOME", getVar("NOME"))

newTrial("Instrucoes",
         
         newText("<p>INSTRUÇÕES: </p>")
         ,
         newText("<p>Ouça a frase com atenção e depois clique em cima de uma das sentenças, <strong>A</strong> ou <strong>B</strong></p>")
          ,

         newBotton("Iniciar")
         .log()

  )

Template("tabela_script_auditivo.csv",

         row => newTrial("Experimento",

                         newAudio("AudioExperimento", row.AudioExperimento)
                         .play()
                         ,

                         newImage("alto_falante_icone.png")
                         .size(90 , 90)
                         .center()
                         .print()
                         ,

                         newButtom("Próximo")
                         .log()
                         .remove()
                         ,

                         getImage("alto_falante_icone.png")
                         .remove()
                         ,
                         newText("A", row.SentenceA)
                         ,
                          newText("B", row.SentenceB)
                         ,
                        newCanvas("2000vn","800vh")
                         .add("center at 25%", "middle at 2%", getText("A"))
                         .add("center at 75%, "middle at 2%", getText("B"))
                         .print()
                         ,

         newSelector()
         .add(getText("A"), getText("B"))
         .keys("A", "B")
         .log()
         .wait()

                         )

    .log("Group", row.Group)
    .log("Item", row.Item)
                        
)
newTrial("Final",

         newText("<p>O experimanto foi concluído. Obrigada pela participação!</p>")
         ,
         newText("<p>Você receberá um e-mail com a sua declaração de participação.</p>")
         .center()
         .wait()
         ,
         
)

.setOption("countsForProgressBar", false);
