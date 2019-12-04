Complejidad Ciclomatica
La complejidad ciclomática es una métrica inicialmente propuesta por Thomas J.McCabe en un artículo suyo en 1976 en el que escribía sobre la complejidad en el desarrollo de software.
Esta métrica mide el número de flujos distintos de ejecución que puede tener el código de un artefacto de software, dicho llanamente, nos dice cuantos ifs-then-else, while, for, switch…etc, tenemos en nuestro código.
A más complejidad ciclomática, más complejo será el código, más complicado de leer, de entender, de modificar, de mantener y, por lo tanto, más caro.
Además, obteniendo su valor, determina el número máximo de pruebas que hay que realizar para asegurarnos que nuestra cobertura de test pasan al menos una vez por cada línea del código.
Tabla de Complejidad Ciclomatica
1 -10 -> Programa Simple, sin  mucho riesgo
11-20 -> MAs complejo, riesg moderado
21-50 -> Complejo, programa con alto riesgo
50 -> Programa no testeable, Muy alto riesgo
La complejidad ciclomatica se calcula de varias formas pero en resumen es asignando puntuaciones por cada condicional, bloque de codigo a ejecutar donde surja un error, un ciclo etc
Reducir la complejidad:
Se reduce mediante recomendaciones, no son estrictas pero generan una buena practica de codigo
 +Principio de responsabilidad unica 
        Metodos con una sola funcion y que se ejecute bien.
 +Metodos PEqueños 
        Entre mas pequeño, legible y funcional,resulta mas facil el analisis del resultado 
 + Evitar retornar valores null
        Evitar los condicionales con retorno null para evitar el NullPointerException
 + Evitar parametros Opcionale:
        Hacer funciones sin parametros opcionales para ser mas estricto en los metodos a utilizar y garantizar su funcionalidad
 + Un solo Nivel de indentacion
        El indentado a un solo nivel evita la distribucion no prporcional a nuestro codigo debido a las anidadas
 + Evitar las sentencias switch case
        Es claro debido a la cantidad tan grande de ifs que se encuentran anidados dentro de esta estructura


*************/////////////*************////////
Complejidad Cognitiva
Tambien es una medida de como es de dificil entender un bloque de codigo
Esta complejidad va de la mano de la antes mencionada, pero esta indica que tan bien esta el ciclo analizado, si es que permite una buena interaccion, si es que permite su mantenimiento, mientras que la otra esta al tanto de lo grande que es esta.
El analisis  se hace mediante un software que mide la complejidad cognitiva estableciendo un rango que no debe sobrepasar para saber su grado de complejidad

