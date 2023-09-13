/*
    Voici venu le temps de votre première instruction conditionnelle.

    Parfois, on aura besoin de dire à la machine : dans tel cas, fait ceci ; sinon, fait cela.
    L'exemple que l'on se propose de traiter ici repose sur la variable age. Si la valeur de
    la variable age est supérieure ou égale à 18, on affectera à la variable message la chaîne de
    caractères "Vous êtes majeur". Sinon on lui affectera la valeur "Vous êtes mineur".

    La syntaxe pour dire à la machine "Si telle condition est vérifiée, fait ceci, sinon fait cela" est :

    if (condition){
        instructions à exécuter si la condition est satisfaite
    }
    else{
        instructions à exécuter si la contition n'est pas satisfaite
    }

    Note : l'instruction writeInDocument(message) permet d'afficher la valeur de la variable
    message dans la page web. Là encore, ce n'est pas de la magie, c'est un autre code définit dans
    tool.js mais vous n'avez pas à vous en occuper.

*/
    let age = 17;

    let message = "Etes-vous majeur ?";

    // Ajoutez ici vos instructions

    writeInDocument(message);