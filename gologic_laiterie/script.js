$(document).ready(function()
{

  // SCRIPT PARTIE 1
  // Hover du logo de la compagnie
  // Lorsque la souris passe par dessus le logo, le logo est modifié par  son image secondaire où la vache regarde de travers.
  $("#logo").hover(function()
  {
      $(this).attr("src", "01_logo_white_cow_tilt.png");
  },
  // Lorsque la souris se retire du logo, il est modifié et reprend son image initiale.
  function()
  {
      $(this).attr("src", "01_logo_white_cow.png");
  });

  //Lorsque l'on clique sur le logo, la page web se recharge
  $('#logo').click(function()
  {
      location.reload();
  })
  // Le système de hover est également appliqué pour les menus de déplacement rapides
  //Lorsqu'un menu est hover, une tache noire de vache est appliqué en fond d'écran du menu concerné et le texte passe de noir à blanc pour la visibilité

  //Menu Laiterie
  //Lorsque le menu est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#menu_01_01").hover(function()
  {
      $(this).attr("src", "01_la_laiterie_blanc_resized.png");
  },
  // Lorsque la souris se retire du menu, il est modifié et reprend son image initiale.
  function()
  {
      $(this).attr("src", "01_la_laiterie_noir_resized.png");
  });

  //Menu Produits
  //Lorsque le menu est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#menu_01_02").hover(function()
  {
      $(this).attr("src", "01_produits_blanc_resized.png");
  },
  // Lorsque la souris se retire du menu, il est modifié et reprend son image initiale.
  function()
  {
      $(this).attr("src", "01_produits_noir_resized.png");
  });

  //Menu Volet Commercial
  //Lorsque le menu est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#menu_01_03").hover(function()
  {
      $(this).attr("src", "01_volet_commercial_blanc_resized.png");
  },
  // Lorsque la souris se retire du menu, il est modifié et reprend son image initiale.
  function()
  {
      $(this).attr("src", "01_volet_commercial_noir_resized.png");
  });

  //Menu Recettes
  //Lorsque le menu est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#menu_01_04").hover(function()
  {
      $(this).attr("src", "01_recettes_blanc_resized.png");
  },
  // Lorsque la souris se retire du menu, il est modifié et reprend son image initiale.
  function()
  {
      $(this).attr("src", "01_recettes_noir_resized.png");
  });

  //Menu Contact
  //Lorsque le menu est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#menu_01_05").hover(function()
  {
      $(this).attr("src", "01_contact_blanc_resized.png");
  },
  // Lorsque la souris se retire du menu, il est modifié et reprend son image initiale.
  function()
  {
      $(this).attr("src", "01_contact_noir_resized.png");
  });

  //Scrolling from Menu clicking
  function scrollToAnchor(anId){
    var aTag = $("#"+ anId);
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  //Menu Laiterie -> Partie #2
  $("#menu_01_01").click(function() {
    scrollToAnchor('cercle_03');
  });

  //Menu Produits -> Partie #4
  $("#menu_01_02").click(function() {
    scrollToAnchor('titre_04');
  });

  //Menu Volet Commercial -> Partie #6
  $("#menu_01_03").click(function() {
    scrollToAnchor('titre_06');
  });

  //Menu Recettes -> Partie #7
  $("#menu_01_04").click(function() {
    scrollToAnchor('titre_07');
  });

  //Menu Contact -> Partie #9
  $("#menu_01_05").click(function() {
    scrollToAnchor('emplois_09');
  });

  // SCRIPT PARTIE 2

  // SCRIPT PARTIE 3
  //Bouton Hover
  //Lorsque le bouton est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#bouton_03").hover(function()
  {
      $(this).attr("src", "03_connaitre_notre_histoire_noir.png");
  },
  // Lorsque la souris se retire du bouton, il est modifié et reprend son image initiale.
  function()
  {
      $(this).attr("src", "03_connaitre_notre_histoire_blanc.png");
  });
  //Lorsque l'on clique sur le bouton, la page web se recharge (TODO:Rediriger sur une autre page)
  $('#bouton_03').click(function()
  {
      location.reload();
  })

  // SCRIPT PARTIE 4

  // SCRIPT PARTIE 5

  //Bouton Hover
  //Lorsque le bouton est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#bouton_05").hover(function()
  {
      $(this).attr("src", "05_en_savoir_plus_blanc.png");
  },
  // Lorsque la souris se retire du bouton, il est modifié et reprend son image initiale.
  function()
  {
      $(this).attr("src", "05_en_savoir_plus_rose.png");
  });

  //Lorsque l'on clique sur le bouton, la page web se recharge (TODO:Rediriger sur une autre page)
  $('#bouton_05').click(function()
  {
      location.reload();
  })

  //Fonction permettant de definir quel description sera visible pour les elements du refrigerateur
  function toggleVisibilityPart5(newSection) {
        $(".section05").not("#" + newSection).hide();
        $("#" + newSection).show();
    }

  //Lorsque l'on clique sur un element du refrigerateur, on affiche la description correspondante
  //On montre par defaut la description de la brique de lait
  toggleVisibilityPart5('description_brique_05');
  //Description de Beurre
  $('#beurre_05').click(function()
  {
      toggleVisibilityPart5('description_beurre_05');
  })

  //Description de Brique
  $('#brique_05').click(function()
  {
      toggleVisibilityPart5('description_brique_05');
  })

  //Description de Creme Glacee
  $('#creme_05').click(function()
  {
      toggleVisibilityPart5('description_creme_05');
  })

  //Description de Frappe aux Fruits
  $('#frappe_05').click(function()
  {
      toggleVisibilityPart5('description_frappe_05');
  })

  //Description de Glace
  $('#glace_05').click(function()
  {
      toggleVisibilityPart5('description_glace_05');
  })

  // SCRIPT PARTIE 6

  //Bouton Hover
  //Lorsque le bouton est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#bouton_06").hover(function()
  {
      $(this).attr("src", "06_en_savoir_plus_noir.png");
  },
  // Lorsque la souris se retire du bouton, il est modifié et reprend son image initiale.
  function()
  {
      $(this).attr("src", "06_en_savoir_plus_blanc.png");
  });

  //Lorsque l'on clique sur le bouton, la page web se recharge (TODO:Rediriger sur une autre page)
  $('#bouton_06').click(function()
  {
      location.reload();
  })

  //Fonction permettant de definir quel description sera visible pour les elements du volet commercial
  function toggleVisibilityPart6(newSection) {
        $(".section06").not("#" + newSection).hide();
        $("#" + newSection).show();
    }
  //Lorsque l'on clique sur un element, on affiche la description correspondante
  //Description de la Vache
  //On montre par defaut la description de la vache
  toggleVisibilityPart6('description_vache_06');
  //On retient la dernière description qui a été montrée
  var lastDescription = "vache";
  $('#vache_06').click(function()
  {
    //Si la derniere description correspond a celle de la vache
    if(lastDescription =="vache")
    {
      //On ne fait rien
    }
    //Si ce n'est pas le cas
    else
    {
      //On retire le focus de l'icone dernièrement cliquée
      $("#" + lastDescription + "_06").attr("src","06_" + lastDescription + "_noir.png");
      //On met le focus sur l'icone de la vache
      $(this).attr("src", "06_vache_blanc.png");
      //On montre la description de la vache
      toggleVisibilityPart6('description_vache_06');
      //On retient que c'est l'icone de la vache qui a été cliquée en dernier
      lastDescription = "vache"
    }
  })

  //Description de l'Usine
  $('#usine_06').click(function()
  {
    //Si la derniere description correspond a celle de l'usine
    if(lastDescription =="usine")
    {
      //On ne fait rien
    }
    //Si ce n'est pas le cas
    else
    {
      //On retire le focus de l'icone dernièrement cliquée
      $("#" + lastDescription + "_06").attr("src","06_" + lastDescription + "_noir.png");
      //On met le focus sur l'icone de l'usine
      $(this).attr("src", "06_usine_blanc.png");
      //On montre la description de l'usine
      toggleVisibilityPart6('description_usine_06');
      //On retient que c'est l'icone de l'usine qui a été cliquée en dernier
      lastDescription = "usine"
    }
  })

  //Description du Camion
  $('#camion_06').click(function()
  {
    //Si la derniere description correspond a celle du camion
    if(lastDescription =="camion")
    {
      //On ne fait rien
    }
    //Si ce n'est pas le cas
    else
    {
      //On retire le focus de l'icone dernièrement cliquée
      $("#" + lastDescription + "_06").attr("src","06_" + lastDescription + "_noir.png");
      //On met le focus sur l'icone du camion
      $(this).attr("src", "06_camion_blanc.png");
      //On montre la description du camion
      toggleVisibilityPart6('description_camion_06');
      //On retient que c'est l'icone du camion qui a été cliquée en dernier
      lastDescription = "camion"
    }
  })

  //Description du Refrigerateur
  $('#refrigerateur_06').click(function()
  {
    //Si la derniere description correspond a celle du refrigerateur
    if(lastDescription =="refrigerateur")
    {
      //On ne fait rien
    }
    //Si ce n'est pas le cas
    else
    {
      //On retire le focus de l'icone dernièrement cliquée
      $("#" + lastDescription + "_06").attr("src","06_" + lastDescription + "_noir.png");
      //On met le focus sur l'icone du refrigerateur
      $(this).attr("src", "06_refrigerateur_blanc.png");
      //On montre la description du refrigerateur
      toggleVisibilityPart6('description_refrigerateur_06');
      //On retient que c'est l'icone du refrigerateur qui a été cliquée en dernier
      lastDescription = "refrigerateur"
    }
  })

  // SCRIPT PARTIE 7
  //Fonction permettant de definir quel recette sera visible pour les elements du filtrage
  function toggleVisibilityPart7(newSection) {
        $(".recette").not("." + newSection).hide();
        $("." + newSection).show();
  }

  var filtreClic = false;
  //Lorsque l'on clique sur le filtrage, les filtres speciaux apparaissent
  $('#filtre_07').click(function()
  {
    if(!filtreClic)
    {
        $(".filtrage").show();
        filtreClic = true;
    }
    else
    {
      $(".filtrage").hide();
      filtreClic = false;
      $(".recette").show();
    }
  })

  //Lorsque l'on clique sur le filtrage de pain
  $('#filtre_pain_07').click(function()
  {
      $(".filtrage").hide();
      toggleVisibilityPart7("pain");
      filtreClic = false;
  })
  //Lorsque l'on clique sur le filtrage de dessert
  $('#filtre_dessert_07').click(function()
  {
      $(".filtrage").hide();
      toggleVisibilityPart7("dessert");
      filtreClic = false;
  })
  //Lorsque l'on clique sur le filtrage de cafe
  $('#filtre_cafe_07').click(function()
  {
      $(".filtrage").hide();
      toggleVisibilityPart7("cafe");
      filtreClic = false;
  })
  //Lorsque l'on clique sur le filtrage de fromage
  $('#filtre_fromage_07').click(function()
  {
      $(".filtrage").hide();
      toggleVisibilityPart7("fromage");
      filtreClic = false;
  })

  //Filtre Pain
  //Lorsque le filtre est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#filtre_pain_07").hover(function()
  {
      $(this).attr("src", "07_filtrer_pain_jaune.png");
  },
  // Lorsque la souris se retire du filtre, il est modifié et reprend son image initiale.
  function()
  {
      $(this).attr("src", "07_filtrer_pain.png");
  });

  //Filtre Dessert
  //Lorsque le filtre est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#filtre_dessert_07").hover(function()
  {
      $(this).attr("src", "07_filtrer_dessert_jaune.png");
  },
  // Lorsque la souris se retire du filtre, il est modifié et reprend son image initiale.
  function()
  {
      $(this).attr("src", "07_filtrer_dessert.png");
  });

  //Filtre Cafe
  //Lorsque le filtre est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#filtre_cafe_07").hover(function()
  {
      $(this).attr("src", "07_filtrer_cafe_jaune.png");
  },
  // Lorsque la souris se retire du filtre, il est modifié et reprend son image initiale.
  function()
  {
      $(this).attr("src", "07_filtrer_cafe.png");
  });

  //Filtre Fromage
  //Lorsque le filtre est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#filtre_fromage_07").hover(function()
  {
      $(this).attr("src", "07_filtrer_fromage_jaune.png");
  },
  // Lorsque la souris se retire du filtre, il est modifié et reprend son image initiale.
  function()
  {
      $(this).attr("src", "07_filtrer_fromage.png");
  });
  // SCRIPT PARTIE 8

  //Recette #1
  //Lorsque la recette est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#recette_01_08").hover(function()
  {
      $(this).attr("src", "08_01_noir.png");
  },
  // Lorsque la souris se retire de la recette, elle est modifiée et reprend son image initiale.
  function()
  {
      $(this).attr("src", "08_01.png");
  });

  //Lorsque l'on clique sur la recette, la page web se recharge (TODO:Rediriger sur une autre page)
  $('#recette_01_08').click(function()
  {
      location.reload();
  })

  //Recette #2
  //Lorsque la recette est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#recette_02_08").hover(function()
  {
      $(this).attr("src", "08_02_noir.png");
  },
  // Lorsque la souris se retire de la recette, elle est modifiée et reprend son image initiale.
  function()
  {
      $(this).attr("src", "08_02.png");
  });

  //Lorsque l'on clique sur la recette, la page web se recharge (TODO:Rediriger sur une autre page)
  $('#recette_02_08').click(function()
  {
      location.reload();
  })

  //Recette #3
  //Lorsque la recette est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#recette_03_08").hover(function()
  {
      $(this).attr("src", "08_03_noir.png");
  },
  // Lorsque la souris se retire de la recette, elle est modifiée et reprend son image initiale.
  function()
  {
      $(this).attr("src", "08_03.png");
  });
  //Lorsque l'on clique sur la recette, la page web se recharge (TODO:Rediriger sur une autre page)
  $('#recette_03_08').click(function()
  {
      location.reload();
  })

  //Recette #4
  //Lorsque la recette est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#recette_04_08").hover(function()
  {
      $(this).attr("src", "08_04_noir.png");
  },
  // Lorsque la souris se retire de la recette, elle est modifiée et reprend son image initiale.
  function()
  {
      $(this).attr("src", "08_04.png");
  });

  //Lorsque l'on clique sur la recette, la page web se recharge (TODO:Rediriger sur une autre page)
  $('#recette_04_08').click(function()
  {
      location.reload();
  })

  //Recette #5
  //Lorsque la recette est hover, une image secondaire le remplace afin de dynamiser l'expérience utilisateur
  $("#recette_05_08").hover(function()
  {
      $(this).attr("src", "08_05_noir.png");
  },
  // Lorsque la souris se retire de la recette, elle est modifiée et reprend son image initiale.
  function()
  {
      $(this).attr("src", "08_05.png");
  });

  //Lorsque l'on clique sur la recette, la page web se recharge (TODO:Rediriger sur une autre page)
  $('#recette_05_08').click(function()
  {
      location.reload();
  })
  // SCRIPT PARTIE 9
  //Lorsque l'on clique sur le bouton, la page web se recharge (TODO:Rediriger sur une autre page)
  $('#emplois_09').click(function()
  {
      location.reload();
  })

  //Lorsque l'on clique sur le bouton, la page web se recharge (TODO:Rediriger sur une autre page)
  $('#truc_09').click(function()
  {
      location.reload();
  })
});
