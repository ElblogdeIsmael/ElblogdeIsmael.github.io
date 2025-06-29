# include "AIPlayer.h"
# include "../../include/model/Parchis.h"

// =====================================================
// ==                   Autor: Ismael Sallami Moreno  ==
// =====================================================

const float masinf = 9999999999.0, menosinf = -9999999999.0;
const float gana = masinf / 10.f, pierde = menosinf / 10.f;
const int num_pieces = 2;
const int PROFUNDIDAD_MINIMAX = 4; // Umbral maximo de profundidad para el metodo MiniMax
const int PROFUNDIDAD_ALFABETA = 8; // Umbral maximo de profundidad para la poda Alfa_Beta

// =====================================================
// ==                   MIS VARIABLES HEURÍSTICA                  ==
// =====================================================

static constexpr float W_DISTANCIA      = 1.0f;    // Peso para progreso hacia meta
static constexpr float W_FICHA_SEGURA   = 5.0f;    // Peso para ficha en casilla segura
static constexpr float W_META           = 50.0f;   // Peso para ficha en meta
static constexpr float W_BARRERA_PROPIA = 10.0f;   // Peso si la ficha forma parte de mi barrera
static constexpr float W_BARRERA_OPOS   = -8.0f;   // Peso si la ficha enemiga forma barrera
// Umbrales para ajustar la profundidad según la ramificación
static constexpr int UMBRAL_RAM_BAJA = 3;
static constexpr int UMBRAL_RAM_ALTA = 8;
// Límite adicional de profundidad para búsqueda de quietud
static constexpr int MAX_PROFUNDIDAD_QUIETUD = 3;
// Umbral heurístico para detectar cambios “tácticos” (captura, barrera, etc.)
static constexpr float UMBRAL_DELTA = 5.0f;
const float EPSILON_PROBABILISTICO_POR_DEFECTO = 0.3; // 


// Heurística 2: pesos (otras heurísticas)
static constexpr float PESO_ULTRA_PROGRESO           = 1.0f;
static constexpr float PESO_ULTRA_FICHA_SEGURA       = 7.0f;
static constexpr float PESO_ULTRA_FICHA_META         = 100.0f;
static constexpr float PESO_ULTRA_BARRERA_PROPIA     = 15.0f;
static constexpr float PESO_ULTRA_BARRERA_OPONENTE   = -12.0f;
static constexpr float PESO_ULTRA_PIEZA_EN_CASA      = -20.0f;
static constexpr float PESO_ULTRA_DISTANCIA_RELATIVA = 2.0f;


//---Mis variabls para la heurística --- (Mejor Heurística)
float PESO_DISTANCIA_TOTAL = 0.5;
float PESO_FICHA_EN_META = 100.0;
const float PESO_FICHA_EN_CASA = -25.0;
const float PESO_FICHA_SEGURA = 5.0;
const float PESO_FICHA_FINAL_QUEUE = 10.0;
const float PESO_BARRERA_PROPIA_SIMPLE = 7.0;
const float PESO_AMENAZA_CAPTURA_A_OPONENTE = 15.0;
float PESO_VULNERABILIDAD_PROPIA = -20.0;
const float DISTANCIA_MAX_TABLERO_APROX = 76.0; //(72 casillas podría ser, he probado con varios valores y 76 se ajusta mejor)
//---Fin de mis variables para la heurística ---
static constexpr int MAX_DISTANCIA_CONST = 68; // variable extra de pruebas

struct NodeInfo { // intento de almacenar información del nodo
   Parchis estado;
   color   c_move;
   int     id_move;
   int     dice_move;
   float   score;
};


bool AIPlayer::move(){
   cout << COUT_ORANGE_BOLD << "Realizo un movimiento automatico" << COUT_NOCOLOR << endl;

   color c_piece;
   int id_piece;
   int dice;
   think(c_piece, id_piece, dice);

   cout << COUT_ORANGE_BOLD << "Movimiento elegido: " << str(c_piece) << " " << id_piece << " " << dice << COUT_NOCOLOR << endl;

   actual->movePiece(c_piece, id_piece, dice);
   return true;
}

// --------PARTE ANTES DEL TUTORIAL_ MÉTODO THINK---------

// void AIPlayer::think(color& c_piece, int& id_piece, int& dice) const{
//    // IMPLEMENTACIÓN INICIAL DEL AGENTE
//    // Esta implementación realiza un movimiento aleatorio.
//    // Se proporciona como ejemplo, pero se debe cambiar por una que realice un movimiento inteligente
//    //como lo que se muestran al final de la función.

//    // OBJETIVO: Asignar a las variables c_piece, id_piece, dice (pasadas por referencia) los valores,
//    //respectivamente, de:
//    // - color de ficha a mover
//    // - identificador de la ficha que se va a mover
//    // - valor del dado con el que se va a mover la ficha.

//    // El id de mi jugador actual.
//    int player = actual->getCurrentPlayerId();

//    // Vector que almacenará los dados que se pueden usar para el movimiento
//    vector<int> current_dices;
//    // Vector que almacenará los ids de las fichas que se pueden mover para el dado elegido.
//    vector<tuple<color, int>> current_pieces;

//    // Se obtiene el vector de dados que se pueden usar para el movimiento
//    current_dices = actual->getAvailableNormalDices(player);
//    // Elijo un dado de forma aleatoria.
//    dice = current_dices[rand() % current_dices.size()];

//    // Se obtiene el vector de fichas que se pueden mover para el dado elegido
//    current_pieces = actual->getAvailablePieces(player, dice);

//    // Si tengo fichas para el dado elegido muevo una al azar.
//    if (current_pieces.size() > 0){
//       int random_id = rand() % current_pieces.size();
//       id_piece = get<1>(current_pieces[random_id]); // get<i>(tuple<...>) me devuelve el i-ésimo
//       c_piece = get<0>(current_pieces[random_id]); // elemento de la tupla
//    }
//    else{
//       // Si no tengo fichas para el dado elegido, pasa turno (la macro SKIP_TURN me permite no mover).
//       id_piece = SKIP_TURN;
//       c_piece = actual->getCurrentColor(); // Le tengo que indicar mi color actual al pasar turno.
//    }

   
//    // El siguiente código se proporciona como sugerencia para iniciar la implementación del agente.

//    float valor; // Almacena el valor con el que se etiqueta el estado tras el proceso de busqueda.
//    float alpha = menosinf, beta = masinf; // Cotas iniciales de la poda AlfaBeta
//    // Llamada a la función para la poda (los parámetros son solo una sugerencia, se pueden modificar).
//    ValoracionTest valoracionTest;

//    // ----------------------------------------------------------------- //

//    // Si quiero poder manejar varios comportamientos, puedo usar la variable id del agente para usar una u otra.
//    // switch (id)
//    // {
//    // case 0:
//    //    // Mi implementación base de la poda con ValoracionTest
//    //    valor = Poda_AlfaBeta(*actual, jugador, 0, PROFUNDIDAD_ALFABETA, c_piece, id_piece, dice, alpha, beta, &valoracionTest);
//    //    break;
//    // case 1:
//    //    // Mi implementación definitiva con la que gano a todos los ninjas.
//    //    valor = Poda_Final2DefinitivaAhoraSi(*actual, jugador, 0, PROFUNDIDAD_ALFABETA, c_piece, id_piece, dice, alpha, beta, &miValoracion3);
//    //    break;
//    // case 2:
//    //    // Las distintas pruebas que he realizado (primera prueba)
//    //    valor = Poda_AlfaBeta_Mejorada(*actual, jugador, 0, PROFUNDIDAD_ALFABETA, c_piece, id_piece, dice, alpha, beta, &miValoracion1);
//    //    break;
//    // case 3:
//    //    // Las distintas pruebas que he realizado (segunda prueba)
//    //    valor = Poda_AlfaBeta_SegundaMejora(*actual, jugador, 0, PROFUNDIDAD_ALFABETA, c_piece, id_piece, dice, alpha, beta, &miValoracion1);
//    //    break;
//    //  // ...
//    // }

// }


void AIPlayer::thinkAleatorio(color& c_piece, int& id_piece, int& dice) const{
   // IMPLEMENTACIÓN INICIAL DEL AGENTE
   // Esta implementación realiza un movimiento aleatorio.
   // Se proporciona como ejemplo, pero se debe cambiar por una que realice un movimiento inteligente
   //como lo que se muestran al final de la función.

   // OBJETIVO: Asignar a las variables c_piece, id_piece, dice (pasadas por referencia) los valores,
   //respectivamente, de:
   // - color de ficha a mover
   // - identificador de la ficha que se va a mover
   // - valor del dado con el que se va a mover la ficha.

   // El id de mi jugador actual.
   int player = actual->getCurrentPlayerId();

   // Vector que almacenará los dados que se pueden usar para el movimiento
   vector<int> current_dices;
   // Vector que almacenará los ids de las fichas que se pueden mover para el dado elegido.
   vector<tuple<color, int>> current_pieces;

   // Se obtiene el vector de dados que se pueden usar para el movimiento
   current_dices = actual->getAvailableNormalDices(player);
   // Elijo un dado de forma aleatoria.
   dice = current_dices[rand() % current_dices.size()];

   // Se obtiene el vector de fichas que se pueden mover para el dado elegido
   current_pieces = actual->getAvailablePieces(player, dice);

   // Si tengo fichas para el dado elegido muevo una al azar.
   if (current_pieces.size() > 0){
      int random_id = rand() % current_pieces.size();
      id_piece = get<1>(current_pieces[random_id]); // get<i>(tuple<...>) me devuelve el i-ésimo
      c_piece = get<0>(current_pieces[random_id]); // elemento de la tupla
   }
   else{
      // Si no tengo fichas para el dado elegido, pasa turno (la macro SKIP_TURN me permite no mover).
      id_piece = SKIP_TURN;
      c_piece = actual->getCurrentColor(); // Le tengo que indicar mi color actual al pasar turno.
   }

   
   // El siguiente código se proporciona como sugerencia para iniciar la implementación del agente.

   float valor; // Almacena el valor con el que se etiqueta el estado tras el proceso de busqueda.
   float alpha = menosinf, beta = masinf; // Cotas iniciales de la poda AlfaBeta
   // Llamada a la función para la poda (los parámetros son solo una sugerencia, se pueden modificar).
   ValoracionTest valoracionTest;

   // ----------------------------------------------------------------- //

   // Si quiero poder manejar varios comportamientos, puedo usar la variable id del agente para usar una u otra.
   // switch (id)
   // {
   // case 0:
   //    // Mi implementación base de la poda con ValoracionTest
   //    valor = Poda_AlfaBeta(*actual, jugador, 0, PROFUNDIDAD_ALFABETA, c_piece, id_piece, dice, alpha, beta, &valoracionTest);
   //    break;
   // case 1:
   //    // Mi implementación definitiva con la que gano a todos los ninjas.
   //    valor = Poda_Final2DefinitivaAhoraSi(*actual, jugador, 0, PROFUNDIDAD_ALFABETA, c_piece, id_piece, dice, alpha, beta, &miValoracion3);
   //    break;
   // case 2:
   //    // Las distintas pruebas que he realizado (primera prueba)
   //    valor = Poda_AlfaBeta_Mejorada(*actual, jugador, 0, PROFUNDIDAD_ALFABETA, c_piece, id_piece, dice, alpha, beta, &miValoracion1);
   //    break;
   // case 3:
   //    // Las distintas pruebas que he realizado (segunda prueba)
   //    valor = Poda_AlfaBeta_SegundaMejora(*actual, jugador, 0, PROFUNDIDAD_ALFABETA, c_piece, id_piece, dice, alpha, beta, &miValoracion1);
   //    break;
   //  // ...
   // }

}


void AIPlayer::think(color & c_piece, int & id_piece, int & dice) const {

   float valor; // Almacena el valor con el que se etiqueta el estado tras el proceso de busqueda.
   // Defino las heurísticas que quiera usar.
   ValoracionTest valoracionTest;
   HeuristicaMejorada Mejorada;
   PruebaH miPruebaH;
   // no se ha añadido la declaración de miValoracion1, miValoracion2, miValoracion3, etc. para una entrega más limpia.

   switch(id){
      case 0:
         valor = Poda_AlfaBeta(*actual, jugador, 0, PROFUNDIDAD_ALFABETA, c_piece, id_piece, dice, menosinf, masinf, &valoracionTest); // si uso miPruebaH supera a 3/6
         break;   
      case 1:
         //ajustarPesosDinamicamente();
         //ajustarPesosSegunFaseDePartida(*actual, jugador);
         valor = Poda_AlfaBeta_Probabilistica(*actual, jugador, 0, PROFUNDIDAD_ALFABETA, c_piece, id_piece, dice, menosinf, masinf, &Mejorada, EPSILON_PROBABILISTICO_POR_DEFECTO);
         break;
      case 2:
         valor = Poda_AlfaBeta_Probabilistica2_Ordenada_Dinamica(*actual, jugador, 0, PROFUNDIDAD_ALFABETA, c_piece, id_piece, dice, menosinf, masinf, &Mejorada, EPSILON_PROBABILISTICO_POR_DEFECTO);
         break;
      case 3:
         valor = Poda_AlfaBeta(*actual, jugador, 0, PROFUNDIDAD_ALFABETA, c_piece, id_piece, dice, menosinf, masinf, &miPruebaH);
         break;
         // los demás cases se omiten para una entrega más limpia
   }

}

void AIPlayer::thinkFichaMasAdelantada(color &c_piece, int &id_piece, int &dice) const
{
   // Elijo el dado haciendo lo mismo que el jugador aleatorio.
   thinkAleatorio(c_piece, id_piece, dice);
   // Tras llamar a esta función, ya tengo en dice el número de dado que quiero usar.
   // Ahora, en vez de mover una ficha al azar, voy a mover (o a aplicar
   // el dado especial a) la que esté más adelantada
   // (equivalentemente, la más cercana a la meta).
   int player = actual->getCurrentPlayerId();
   vector<tuple<color, int>> current_pieces = actual->getAvailablePieces(player, dice);
   int id_ficha_mas_adelantada = -1;
   color col_ficha_mas_adelantada = none;
   int min_distancia_meta = 9999;
   for (int i = 0; i < current_pieces.size(); i++)
   {
      // distanceToGoal(color, id) devuelve la distancia a la meta de la ficha [id] del color que le indique.
      color col = get<0>(current_pieces[i]);
      int id = get<1>(current_pieces[i]);
      int distancia_meta = actual->distanceToGoal(col, id);
      if (distancia_meta < min_distancia_meta)
      {
         min_distancia_meta = distancia_meta;
         id_ficha_mas_adelantada = id;
         col_ficha_mas_adelantada = col;
      }
   }
   // Si no he encontrado ninguna ficha, paso turno.
   if (id_ficha_mas_adelantada == -1)
   {
      id_piece = SKIP_TURN;
      c_piece = actual->getCurrentColor(); // Le tengo que indicar mi color actual al pasar turno.
   }
   // En caso contrario, moveré la ficha más adelantada.
   else
   {
      id_piece = id_ficha_mas_adelantada;
      c_piece = col_ficha_mas_adelantada;
   }
}

void AIPlayer::thinkMejorOpcion(color &c_piece, int &id_piece, int &dice) const
{
   // Vamos a mirar todos los posibles movimientos del jugador actual accediendo a los hijos del estado actual.
   // Cuando ya he recorrido todos los hijos, la función devuelve el estado actual. De esta forma puedo saber
   // cuándo paro de iterar.
   // Para ello, vamos a iterar sobre los hijos con la función de Parchis getChildren().
   // Esta función devuelve un objeto de la clase ParchisBros, que es una estructura iterable
   // sobre la que se pueden recorrer todos los hijos del estado sobre el que se llama.
   ParchisBros hijos = actual->getChildren();
   bool me_quedo_con_esta_accion = false;
   // La clase ParchisBros viene con un iterador muy útil y sencillo de usar.
   // Al hacer begin() accedemos al primer hijo de la rama,
   // y cada vez que hagamos ++it saltaremos al siguiente hijo.
   // Comparando con el iterador end() podemos consultar cuándo hemos terminado de visitar los hijos.
   for (ParchisBros::Iterator it = hijos.begin();
         it != hijos.end() and !me_quedo_con_esta_accion; ++it)
   {
      Parchis siguiente_hijo = *it;
      // Si en el movimiento elegido comiera ficha, llegara a la meta o ganara, me quedo con esa acción.
      // Termino el bucle en este caso.
      if (siguiente_hijo.isEatingMove() or
         siguiente_hijo.isGoalMove() or
         (siguiente_hijo.gameOver() and siguiente_hijo.getWinner() == this->jugador))
      {
         me_quedo_con_esta_accion = true;
         c_piece = it.getMovedColor();
         id_piece = it.getMovedPieceId();
         dice = it.getMovedDiceValue();
      }
   }
   // Si he encontrado una acción que me interesa, la guardo en las variables pasadas por referencia.
   // (Ya lo he hecho antes, cuando les he asignado los valores con el iterador).
   // Si no he encontrado ninguna acción que me interese, voy a mover la ficha más adelantada como en el caso
   // anterior.
   if(!me_quedo_con_esta_accion){
      thinkFichaMasAdelantada(c_piece, id_piece, dice);
   }
}




float ValoracionTest::getHeuristic(const Parchis& estado, int jugador) const{
   // Heurística de prueba proporcionada para validar el funcionamiento del algoritmo de búsqueda.


   int ganador = estado.getWinner();
   int oponente = (jugador + 1) % 2;

   // Si hay un ganador, devuelvo más/menos infinito, según si he ganado yo o el oponente.
   if (ganador == jugador){
      return gana;
   }
   else if (ganador == oponente){
      return pierde;
   }
   else{
      // Colores que juega mi jugador y colores del oponente
      vector<color> my_colors = estado.getPlayerColors(jugador);
      vector<color> op_colors = estado.getPlayerColors(oponente);

      // Recorro todas las fichas de mi jugador
      int puntuacion_jugador = 0;
      // Recorro colores de mi jugador.
      for (int i = 0; i < my_colors.size(); i++){
         color c = my_colors[i];
         // Recorro las fichas de ese color.
         for (int j = 0; j < num_pieces; j++){
            // Valoro positivamente que la ficha esté en casilla segura o meta.
            if (estado.isSafePiece(c, j)){
               puntuacion_jugador++;
            }
            else if (estado.getBoard().getPiece(c, j).get_box().type == goal){
               puntuacion_jugador += 5;
            }
         }
      }

      // Recorro todas las fichas del oponente
      int puntuacion_oponente = 0;
      // Recorro colores del oponente.
      for (int i = 0; i < op_colors.size(); i++){
         color c = op_colors[i];
         // Recorro las fichas de ese color.
         for (int j = 0; j < num_pieces; j++){
            if (estado.isSafePiece(c, j)){
               // Valoro negativamente que la ficha esté en casilla segura o meta.
               puntuacion_oponente++;
            }
            else if (estado.getBoard().getPiece(c, j).get_box().type == goal){
               puntuacion_oponente += 5;
            }
         }
      }

      // Devuelvo la puntuación de mi jugador menos la puntuación del oponente.
      return puntuacion_jugador - puntuacion_oponente;
   }
}

// Algoritmo Minimax 
float AIPlayer::Minimax(const Parchis &actual, int jugador, int profundidad, int profundidad_max, color &c_piece, int &id_piece, int &dice, Heuristic *heuristic) const
{ // debo de añadir const al final de la función
   if (profundidad == profundidad_max || actual.gameOver())
   { // Nodo terminal o profundidad límite: llamo a la función heurística
      // IMPORTANTE: USAMOS EL MÉTODO evaluate AUNQUE HAYAMOS REDEFINIDO LA CLASE HEURISTIC
      return heuristic->evaluate(actual, jugador);
   }
   // Comparo mi jugador con el actual de la partida para saber en qué tipo de nodo estoy
   else if (actual.getCurrentPlayerId() == jugador)
   { // Nodo MAX
      float valor = menosinf; // Inicialización lo más pequeña posible para ir calculando el máximo
      // Obtengo los hijos del nodo actual y los recorro
      // Se ha cambiado a vector
      vector<ParchisSis> rama = actual.getChildrenList();
      for (int i = 0; i < rama.size(); i++)
      {
         ParchisSis hijo_i = rama[i]; // Acceso al estado con el hijo i-ésimo del vector
         Parchis nuevo_hijo = *hijo_i; // Acceso al estado
         // Búsqueda en profundidad (llamada recursiva)
         float new_val = Minimax(nuevo_hijo, jugador, profundidad + 1, profundidad_max, c_piece, id_piece, dice, heuristic);
         if (new_val > valor)
         {
            // Me voy quedando con el máximo
            valor = new_val;
            if (profundidad == 0)
            {
               // Acceso al movimiento del i-ésimo hijo.
               c_piece = hijo_i.getMovedColor();
               id_piece = hijo_i.getMovedPieceId();
               dice = hijo_i.getMovedDiceValue();
            }
         }
      }
      return valor;
   }
   else
   { // Nodo MIN
      float valor = masinf; // Inicialización lo más grande posible para ir calculando el mínimo
      // Obtengo los hijos del nodo actual y los recorro
      ParchisBros rama = actual.getChildren();
      for (ParchisBros::Iterator it = rama.begin(); it != rama.end(); ++it)
      {
         Parchis nuevo_hijo = *it;
         // Búsqueda en profundidad (llamada recursiva)
         float new_val = Minimax(nuevo_hijo, jugador, profundidad + 1, profundidad_max, c_piece, id_piece, dice, heuristic);
         // Me voy quedando con el mínimo
         if (new_val < valor)
         {
            valor = new_val;
         }
      }
      return valor;
   }
}


// Algoritmo Minimax con límite de nodos
float AIPlayer::Minimax_Limitado(const Parchis &actual, int jugador, int profundidad, int profundidad_max, color &c_piece, int &id_piece, int &dice, Heuristic *heuristic) const
{
   if (profundidad == profundidad_max || actual.gameOver())
   { // Nodo terminal o profundidad límite: llamo a la función heurística
      return heuristic->evaluate(actual, jugador);
   }
   else if (actual.getCurrentPlayerId() == jugador)
   { // Nodo MAX
      float valor = menosinf;
      ParchisBros rama = actual.getChildren();
      for (ParchisBros::Iterator it = rama.begin(); it != rama.end(); ++it)
      {
         Parchis nuevo_hijo = *it;
         // Verificar si hemos alcanzado el límite
         if (NodeCounter::isLimitReached())
         {
            cout << "Límite de nodos alcanzado, devolviendo el mejor nodo parcial" << endl;
            if(profundidad == 0)
            {
               c_piece = it.getMovedColor();
               id_piece = it.getMovedPieceId();
               dice = it.getMovedDiceValue();
            }
            return valor;
         }
         // Búsqueda en profundidad (llamada recursiva)
         float new_val = Minimax_Limitado(nuevo_hijo, jugador, profundidad + 1, profundidad_max, c_piece, id_piece, dice, heuristic);
         if (new_val > valor)
         {
            valor = new_val;
            if (profundidad == 0)
            {
               c_piece = it.getMovedColor();
               id_piece = it.getMovedPieceId();
               dice = it.getMovedDiceValue();
            }
         }
      }
      return valor;
   }
   else
   { // Nodo MIN
      float valor = masinf;
      // Obtengo los hijos del nodo actual y los recorro
      ParchisBros rama = actual.getChildren();
      for (ParchisBros::Iterator it = rama.begin(); it != rama.end(); ++it)
      {
         Parchis nuevo_hijo = *it;
         // Verificar si hemos alcanzado el límite
         if (NodeCounter::isLimitReached())
         {
            cout << "Límite de nodos alcanzado, devolviendo el mejor nodo parcial" << endl;
            return heuristic->evaluate(actual, jugador);
         }
         // Búsqueda en profundidad (llamada recursiva)
         float new_val = Minimax_Limitado(nuevo_hijo, jugador, profundidad + 1, profundidad_max, c_piece, id_piece, dice, heuristic);
         if (new_val < valor)
         {
            valor = new_val;
         }
      }
      return valor;
   }
}

//===============FIN DEL TUTORIAL==================


// =====================================================
// ==                   PODA ALFA BETA                  ==
// =====================================================

float Poda_AlfaBeta(const Parchis &actual, int jugador, int profundidad, int profundidad_max, color &c_piece, int &id_piece, int &dice, float alpha, float beta, Heuristic *heuristic)
{
      // Caso base: nodo terminal o profundidad límite
      if (profundidad == profundidad_max || actual.gameOver()) {
         return heuristic->evaluate(actual, jugador);
      }

      // Nodo MAX: le toca mover al mismo jugador que invocó la búsqueda
      if (actual.getCurrentPlayerId() == jugador) {
         float valor = menosinf;
         ParchisBros hijos = actual.getChildren();

         for (ParchisBros::Iterator it = hijos.begin(); it != hijos.end(); ++it) { // se optó por dejar el iterador, en vez de usar un vector
            Parchis siguiente = *it;

            // Verificar si hemos alcanzado el límite de nodos
            if (NodeCounter::isLimitReached()) {
                  cout << "Límite de nodos alcanzado, devolviendo el mejor nodo parcial (MAX)" << endl;
                  if (profundidad == 0) {
                     c_piece  = it.getMovedColor();
                     id_piece = it.getMovedPieceId();
                     dice     = it.getMovedDiceValue();
                  }
                  return valor;
            }

            float new_val = Poda_AlfaBeta(siguiente, jugador, profundidad + 1, profundidad_max, c_piece, id_piece, dice, alpha, beta, heuristic);

            // Actualizo el mejor valor y guardo movimiento si estamos en la raíz
            if (new_val > valor) {
                  valor = new_val;
                  if (profundidad == 0) {
                     c_piece  = it.getMovedColor();
                     id_piece = it.getMovedPieceId();
                     dice     = it.getMovedDiceValue();
                  }
            }

            // Actualizo alfa
            if (valor > alpha) {
                  alpha = valor;
            }

            // Poda: si alfa mayor o igual que beta, cortamos
            if (alpha >= beta) {
                  break;
            }
         }
         return valor;
      }
      // Nodo MIN: le toca mover al oponente
      else {
         float valor = masinf;
         ParchisBros hijos = actual.getChildren();

         for (ParchisBros::Iterator it = hijos.begin(); it != hijos.end(); ++it) {
            Parchis siguiente = *it;

            // Verificar si hemos alcanzado el límite de nodos
            if (NodeCounter::isLimitReached()) {
                  cout << "Límite de nodos alcanzado, devolviendo el mejor nodo parcial (MIN)" << endl;
                  return heuristic->evaluate(actual, jugador);
            }

            float new_val = Poda_AlfaBeta(siguiente, jugador, profundidad + 1, profundidad_max, c_piece, id_piece, dice, alpha, beta, heuristic);

            // Nos quedamos con el mínimo
            if (new_val < valor) {
                  valor = new_val;
            }

            // Actualizo beta
            if (valor < beta) {
                  beta = valor;
            }

            // Poda: si beta menor o igual que alfa, cortamos
            if (beta <= alpha) {
                  break;
            }
         }
         return valor;
      }
   }



// =====================================================
// ==                   Mi Heurística 1                  ==
// =====================================================

float Heur1::getHeuristic(const Parchis &estado, int jugador) const {
   static constexpr float GANA   = +1e6f;
   static constexpr float PIERDE = -1e6f;

   int ganador  = estado.getWinner();
   int oponente = (jugador + 1) % 2;
   if (ganador == jugador)  return GANA;
   if (ganador == oponente) return PIERDE;

   vector<color> mis_colores = estado.getPlayerColors(jugador);
   vector<color> op_colores  = estado.getPlayerColors(oponente);

   float puntuacion_mia = 0.0f;
   for (color c : mis_colores) {
         for (int id_pieza = 0; id_pieza < num_pieces; ++id_pieza) {
            const Piece &ficha = estado.getBoard().getPiece(c, id_pieza);
            const Box   &caja  = ficha.get_box();

            if (caja.type == goal) {
               puntuacion_mia += W_META;
               continue;
            }

            int dist = estado.distanceToGoal(c, id_pieza);
            puntuacion_mia += W_DISTANCIA * static_cast<float>(100 - dist);

            if (estado.isSafePiece(c, id_pieza)) {
               puntuacion_mia += W_FICHA_SEGURA;
            }

            color muro = estado.isWall(caja);
            if (muro == c) {
               puntuacion_mia += W_BARRERA_PROPIA;
            }
         }
   }

   float puntuacion_op = 0.0f;
   for (color c : op_colores) {
         for (int id_pieza = 0; id_pieza < num_pieces; ++id_pieza) {
            const Piece &ficha = estado.getBoard().getPiece(c, id_pieza);
            const Box   &caja  = ficha.get_box();

            if (caja.type == goal) {
               puntuacion_op += W_META;
               continue;
            }

            int dist = estado.distanceToGoal(c, id_pieza);
            puntuacion_op += W_DISTANCIA * static_cast<float>(100 - dist);

            if (estado.isSafePiece(c, id_pieza)) {
               puntuacion_op += W_FICHA_SEGURA;
            }

            color muro = estado.isWall(caja);
            if (muro == c) {
               puntuacion_op += W_BARRERA_OPOS;
            }
         }
   }

   return puntuacion_mia - puntuacion_op;
}

// NOTA: En el guión se recomienda usar las funciones distanceToGoal y toBox, he usado las que mejor entendía, veía más claras y me funcionaban mejor.

// =====================================================
// ==                   Poda Alfa Beta Ordenada                  ==
// =====================================================

float PodaAlfaBetaOrdenada(const Parchis &actual, int jugador, int profundidad, int profundidad_max, color &c_piece, int &id_piece, int &dice, float alpha, float beta, Heuristic *heuristic) {
   if (profundidad == profundidad_max || actual.gameOver()) return heuristic->evaluate(actual, jugador);

   bool esMax = (actual.getCurrentPlayerId() == jugador);

   // 1) Recojo hijos en un vector con su evaluación heurística
   vector<NodeInfo> lista;
   ParchisBros hijos = actual.getChildren();
   int n_hijos = 0;
   for (ParchisBros::Iterator it = hijos.begin(); it != hijos.end(); ++it) ++n_hijos;
   lista.reserve(n_hijos);
   for (ParchisBros::Iterator it = hijos.begin(); it != hijos.end(); ++it) {
         Parchis hijo = *it;
         color   cm   = it.getMovedColor();
         int     im   = it.getMovedPieceId();
         int     dm   = it.getMovedDiceValue();
         float   h    = heuristic->evaluate(hijo, jugador);
         lista.push_back({ hijo, cm, im, dm, h });
   }

   // 2) Ordeno la lista: si es MAX, descendente; si es MIN, ascendente
   if (esMax) {
         sort(lista.begin(), lista.end(), [](const NodeInfo &a, const NodeInfo &b) { return a.score > b.score; });
   } else {
         sort(lista.begin(), lista.end(), [](const NodeInfo &a, const NodeInfo &b) { return a.score < b.score; });
   }

   // 3) Itero sobre la lista ordenada para poda alfa-beta
   if (esMax) {
         float valor = menosinf;
         for (const NodeInfo &ni : lista) {
            if (NodeCounter::isLimitReached()) {
               if (profundidad == 0) {
                     c_piece  = ni.c_move;
                     id_piece = ni.id_move;
                     dice     = ni.dice_move;
               }
               return valor;
            }
            float new_val = PodaAlfaBetaOrdenada(ni.estado, jugador, profundidad + 1, profundidad_max, c_piece, id_piece, dice, alpha, beta, heuristic);
            if (new_val > valor) {
               valor = new_val;
               if (profundidad == 0) {
                     c_piece  = ni.c_move;
                     id_piece = ni.id_move;
                     dice     = ni.dice_move;
               }
            }
            if (valor > alpha) alpha = valor;
            if (alpha >= beta) break;
         }
         return valor;
   } else {
         float valor = masinf;
         for (const NodeInfo &ni : lista) {
            if (NodeCounter::isLimitReached()) {
               return heuristic->evaluate(actual, jugador);
            }
            float new_val = PodaAlfaBetaOrdenada(ni.estado, jugador, profundidad + 1, profundidad_max, c_piece, id_piece, dice, alpha, beta, heuristic);
            if (new_val < valor) valor = new_val;
            if (valor < beta) beta = valor;
            if (beta <= alpha) break;
         }
         return valor;
   }
}




// =====================================================
// ==                   Heurística 2                  ==
// =====================================================

float Heur2::getHeuristic(const Parchis &estado, int jugador) const {
   static constexpr float GANA   = +1e7f;
   static constexpr float PIERDE = -1e7f;

   int oponente = (jugador + 1) % 2;
   int ganador  = estado.getWinner();
   if (ganador == jugador)  return GANA;
   if (ganador == oponente) return PIERDE;

   std::vector<color> mis_colores = estado.getPlayerColors(jugador);
   std::vector<color> op_colores  = estado.getPlayerColors(oponente);

   std::unordered_map<int, std::pair<int,int>> contadorPorCaja;
   for (color c : mis_colores) {
         for (int i = 0; i < num_pieces; ++i) {
            const Box &caja = estado.getBoard().getPiece(c, i).get_box();
            contadorPorCaja[caja.num].first++;
         }
   }
   for (color c : op_colores) {
         for (int i = 0; i < num_pieces; ++i) {
            const Box &caja = estado.getBoard().getPiece(c, i).get_box();
            contadorPorCaja[caja.num].second++;
         }
   }

   int total_barreras_mias = 0;
   int total_barreras_opp  = 0;
   for (auto &kv : contadorPorCaja) {
         if (kv.second.first  >= 2) total_barreras_mias++;
         if (kv.second.second >= 2) total_barreras_opp++;
   }

   int min_dist_op = INT_MAX;
   for (color c : op_colores) {
         for (int i = 0; i < num_pieces; ++i) {
            const Box &caja = estado.getBoard().getPiece(c, i).get_box();
            if (caja.type == goal) {
               min_dist_op = 0;
               break;
            }
            int dist = estado.distanceToGoal(c, i);
            if (dist < min_dist_op) min_dist_op = dist;
         }
   }
   if (min_dist_op == INT_MAX) min_dist_op = MAX_DISTANCIA_CONST;

   float puntuacion_mia = 0.0f;
   for (color c : mis_colores) {
         for (int i = 0; i < num_pieces; ++i) {
            const Piece &ficha = estado.getBoard().getPiece(c, i);
            const Box   &caja  = ficha.get_box();

            if (caja.type == home) {
               puntuacion_mia += PESO_ULTRA_PIEZA_EN_CASA;
               continue;
            }
            if (caja.type == goal) {
               puntuacion_mia += PESO_ULTRA_FICHA_META;
               continue;
            }

            int dist = estado.distanceToGoal(c, i);
            puntuacion_mia += PESO_ULTRA_PROGRESO * (MAX_DISTANCIA_CONST - dist);

            if (estado.isSafePiece(c, i)) {
               puntuacion_mia += PESO_ULTRA_FICHA_SEGURA;
            }
            if (contadorPorCaja[caja.num].first >= 2) {
               puntuacion_mia += PESO_ULTRA_BARRERA_PROPIA;
            }
            if (dist < min_dist_op) {
               puntuacion_mia += PESO_ULTRA_DISTANCIA_RELATIVA * (min_dist_op - dist);
            }
         }
   }

   float puntuacion_opp = 0.0f;
   for (color c : op_colores) {
         for (int i = 0; i < num_pieces; ++i) {
            const Piece &ficha = estado.getBoard().getPiece(c, i);
            const Box   &caja  = ficha.get_box();

            if (caja.type == home) {
               puntuacion_opp += PESO_ULTRA_PIEZA_EN_CASA;
               continue;
            }
            if (caja.type == goal) {
               puntuacion_opp += PESO_ULTRA_FICHA_META;
               continue;
            }

            int dist = estado.distanceToGoal(c, i);
            puntuacion_opp += PESO_ULTRA_PROGRESO * (MAX_DISTANCIA_CONST - dist);

            if (estado.isSafePiece(c, i)) {
               puntuacion_opp += PESO_ULTRA_FICHA_SEGURA;
            }
            if (contadorPorCaja[caja.num].second >= 2) {
               puntuacion_opp += PESO_ULTRA_BARRERA_PROPIA;
            }
         }
   }

   float penalizacion_barrera_opp = PESO_ULTRA_BARRERA_OPONENTE * total_barreras_opp;
   float bono_barrera_mia         = PESO_ULTRA_BARRERA_PROPIA * total_barreras_mias;

   return (puntuacion_mia - puntuacion_opp) + bono_barrera_mia + penalizacion_barrera_opp;
}


// =====================================================
// ==                   Nueva Heurística                  ==
// =====================================================

float HeuristicaNueva::getHeuristic(const Parchis& estado, int jugador) const {
   int oponente = (jugador + 1) % 2;
   float valor = 0.0f;

   // 1. Peso de distancia a meta
   float peso_dist = -0.8; // menor distancia, mejor
   for (color c : estado.getPlayerColors(jugador)) {
      for (int i = 0; i < 2; i++) {
         valor += peso_dist * estado.distanceToGoal(c, i);
      }
   }
   for (color c : estado.getPlayerColors(oponente)) {
      for (int i = 0; i < 2; i++) {
         valor -= peso_dist * estado.distanceToGoal(c, i);
      }
   }

   // 2. Peso de fichas en meta
   float peso_meta = 10.0;
   for (color c : estado.getPlayerColors(jugador)) {
      valor += peso_meta * estado.piecesAtGoal(c);
   }
   for (color c : estado.getPlayerColors(oponente)) {
      valor -= peso_meta * estado.piecesAtGoal(c);
   }

   // 3. Fichas en casillas seguras
   float peso_seguro = 2.0;
   for (color c : estado.getPlayerColors(jugador)) {
      for (int i = 0; i < 2; i++) {
         if (estado.isSafePiece(c, i)) valor += peso_seguro;
      }
   }
   for (color c : estado.getPlayerColors(oponente)) {
      for (int i = 0; i < 2; i++) {
         if (estado.isSafePiece(c, i)) valor -= peso_seguro;
      }
   }

   // 4. Potenciales capturas o vulnerabilidad
   if (estado.isEatingMove()) valor += 15.0;
   if (estado.isGoalMove()) valor += 10.0;

   // 5. Detectar el final de la partida (ganador)
   int ganador = estado.getWinner();
   if (ganador == jugador) return 9999.0;
   if (ganador == oponente) return -9999.0;

   return valor;
}



//==================================================
// VERSIONES DE HEURÍSTICAS, intento de mejorar la heurística, planteando el problema de forma diferente.
//===================================================


// Función auxiliar para calcular la puntuación de un solo jugador (IA u oponente)
float calcularPuntuacionJugador(const Parchis &estado, int jugador_calculado, int jugador_IA_perspectiva) {
   float puntuacion_jugador = 0.0;
   vector<color> colores_jugador = estado.getPlayerColors(jugador_calculado);

   // 1. Distancia a la Meta y Fichas en Casa/Meta/Pasillo/Seguras
   for (color c : colores_jugador) {
      for (int i = 0; i < num_pieces; ++i) { // num_pieces es 2
         const Piece& ficha = estado.getBoard().getPiece(c, i);
         const Box& casilla_ficha = ficha.get_box();

         if (casilla_ficha.type == goal) {
            puntuacion_jugador += PESO_FICHA_EN_META;
         } else if (casilla_ficha.type == home) {
            puntuacion_jugador += PESO_FICHA_EN_CASA;
         } else {
            // Distancia: Queremos que (DIST_MAX - dist_actual) sea grande. Así, una distancia pequeña da una puntuación grande.
            float distancia_a_meta = (float)estado.distanceToGoal(c, i);
            puntuacion_jugador += PESO_DISTANCIA_TOTAL * (DISTANCIA_MAX_TABLERO_APROX - distancia_a_meta);

            if (casilla_ficha.type == final_queue) {
               puntuacion_jugador += PESO_FICHA_FINAL_QUEUE;
            }
            if (estado.isSafeBox(casilla_ficha)) { 
               puntuacion_jugador += PESO_FICHA_SEGURA;
            }

            if (!estado.isSafeBox(casilla_ficha)) {
               // Si es mi ficha, es vulnerable. Si es del oponente, es una amenaza potencial para él.
               if (jugador_calculado == jugador_IA_perspectiva) {
                  puntuacion_jugador += PESO_VULNERABILIDAD_PROPIA; // Penalización por ser vulnerable
               } else {
                  puntuacion_jugador += PESO_AMENAZA_CAPTURA_A_OPONENTE; // Oportunidad de capturar al oponente
               }
            }
         }
      }
   }

   // 2. Barreras (solo cuenta si existen, se podría mirar si es efectiva y ver si bloquea a alguien.
   map<Box, int> conteo_casillas_jugador;
   for (color c : colores_jugador) {
      for (int i = 0; i < num_pieces; ++i) {
         const Box& casilla_ficha = estado.getBoard().getPiece(c,i).get_box();
         if(casilla_ficha.type == normal || casilla_ficha.type == final_queue){ // Barreras usualmente fuera de casa/meta
            conteo_casillas_jugador[casilla_ficha]++;
         }
      }
   }
   for(auto const& [casilla, num_fichas_en_casilla] : conteo_casillas_jugador){
      if(num_fichas_en_casilla == 2){ // Es una barrera del jugador_calculado
         // Solo se considera barrera si ambas fichas son del MISMO color.
         color color_barrera = estado.isWall(casilla);
         bool es_barrera_del_jugador_actual = false;
         for(color col_jug : colores_jugador){
            if(col_jug == color_barrera){
               es_barrera_del_jugador_actual = true;
               break;
            }
         }
         if(es_barrera_del_jugador_actual){
            puntuacion_jugador += PESO_BARRERA_PROPIA_SIMPLE;
         }
      }
   }


   return puntuacion_jugador;
}

float HeuristicaMejorada::getHeuristic(const Parchis &estado, int jugador_IA) const {
   int ganador = estado.getWinner();
   if (ganador != -1) {
      return (ganador == jugador_IA) ? gana : pierde;
   }

   int oponente = (jugador_IA + 1) % 2;

   float puntuacion_IA = calcularPuntuacionJugador(estado, jugador_IA, jugador_IA);
   float puntuacion_oponente = calcularPuntuacionJugador(estado, oponente, jugador_IA);

   return puntuacion_IA - puntuacion_oponente;

}


float BusquedaQuietud(const Parchis &actual, int jugador_IA, float alpha, float beta, Heuristic *heuristica, int profundidad_q, int max_profundidad_q) {

   // Comprobación de límite de nodos también aquí
   if (NodeCounter::isLimitReached()) {
         return heuristica->evaluate(actual, jugador_IA); // Fallback si se alcanza el límite
   }

   // "Stand-pat" score: la evaluación del nodo actual si no se hacen más movimientos tácticos.
   // Esto representa el valor mínimo que el jugador actual puede obtener si decide "quedarse quieto".
   float stand_pat_score = heuristica->evaluate(actual, jugador_IA);

   // Si hemos alcanzado la profundidad máxima de la búsqueda de quietud, o la partida ha terminado.
   if (profundidad_q == max_profundidad_q || actual.gameOver()) {
      return stand_pat_score;
   }

   bool es_nodo_max_q = (actual.getCurrentPlayerId() == jugador_IA);

   if (es_nodo_max_q) { // Nodo MAX en la búsqueda de quietud
         // Si el stand_pat_score ya es mejor que lo que MAX puede obtener en otras ramas,

         if (stand_pat_score >= beta) { // El oponente (MIN) no dejaría que esto ocurra si tiene algo mejor
            return stand_pat_score;    // podemos retornar beta, oero tras probar, parece que no es lo correcto
      }
      alpha = max(alpha, stand_pat_score);
   } else { // Nodo MIN en la búsqueda de quietud
         // Si el stand_pat_score ya es peor para MAX que lo que MIN puede forzar en otras ramas,
         if (stand_pat_score <= alpha) { // MAX no elegiría este camino si tiene algo mejor
            return stand_pat_score;     
      }
      beta = min(beta, stand_pat_score);
   }

   // Generar SOLO movimientos tácticos/relevantes, entendemos como tácticos aquellos que pueden cambiar significativamente el estado del juego.
   vector<ParchisSis> todos_hijos = actual.getChildrenList();
   vector<ParchisSis> movimientos_tacticos;

   for (const auto& parchis_sis_hijo : todos_hijos) {
         Parchis estado_hijo_potencial = *parchis_sis_hijo;
      bool es_tactico = false;

         // Criterios para movimiento táctico (ejemplos):
      if (estado_hijo_potencial.isEatingMove()) es_tactico = true;
      if (!es_tactico && estado_hijo_potencial.isGoalMove()) es_tactico = true;

      if (es_tactico) {
         movimientos_tacticos.push_back(parchis_sis_hijo);
      }
   }

   // Si no hay movimientos tácticos, el estado es "quieto".
   if (movimientos_tacticos.empty()) {
      return stand_pat_score;
   }

   if (es_nodo_max_q) {
         float mejor_valor_q = stand_pat_score; // Empezamos con el valor de no hacer nada táctico

      for (const auto& movimiento_tactico_sis : movimientos_tacticos) {
         Parchis estado_hijo_tactico = *movimiento_tactico_sis;
         float valor_hijo = BusquedaQuietud(estado_hijo_tactico, jugador_IA, alpha, beta, heuristica, profundidad_q + 1, max_profundidad_q);
         mejor_valor_q = max(mejor_valor_q, valor_hijo);
         alpha = max(alpha, mejor_valor_q);
         if (beta <= alpha) { // Poda
            break;
         }
      }
      return mejor_valor_q;
   } else { // Nodo MIN en la búsqueda de quietud
         float peor_valor_q = stand_pat_score; // Empezamos con el valor de no hacer nada táctico

         for (const auto& movimiento_tactico_sis : movimientos_tacticos) {
            Parchis estado_hijo_tactico = *movimiento_tactico_sis;
            float valor_hijo = BusquedaQuietud(estado_hijo_tactico, jugador_IA, alpha, beta, heuristica, profundidad_q + 1, max_profundidad_q);
            peor_valor_q = min(peor_valor_q, valor_hijo);
            beta = min(beta, peor_valor_q);
            if (beta <= alpha) { // Poda
               break;
            }
         }
         return peor_valor_q;
      }
}


// ===================================================== Depurar y Ajustar Pesos ====================================================
void PruebaImprimirVariables(){
   cout << "PESOS HEURÍSTICA:" << endl;
   cout << "PESO_DISTANCIA_TOTAL: " << PESO_DISTANCIA_TOTAL << endl;
   cout << "PESO_FICHA_EN_META: " << PESO_FICHA_EN_META << endl;
   cout << "PESO_FICHA_EN_CASA: " << PESO_FICHA_EN_CASA << endl;
   cout << "PESO_FICHA_SEGURA: " << PESO_FICHA_SEGURA << endl;
   cout << "PESO_FICHA_FINAL_QUEUE: " << PESO_FICHA_FINAL_QUEUE << endl;
   cout << "PESO_BARRERA_PROPIA_SIMPLE: " << PESO_BARRERA_PROPIA_SIMPLE << endl;
   cout << "PESO_AMENAZA_CAPTURA_A_OPONENTE: " << PESO_AMENAZA_CAPTURA_A_OPONENTE << endl;
   cout << "PESO_VULNERABILIDAD_PROPIA: " << PESO_VULNERABILIDAD_PROPIA << endl;
   cout << "DISTANCIA_MAX_TABLERO_APROX: " << DISTANCIA_MAX_TABLERO_APROX << endl;
}

void ajustarPesosDinamicamente(int id_jugador_IA) {
   if (id_jugador_IA == 0) { // Si yo empiezo
      PESO_FICHA_EN_META = 110.0;
      PESO_DISTANCIA_TOTAL = 0.8;
   } else { // Empieza el otro jugador
      PESO_FICHA_EN_META = 100.0;
      PESO_DISTANCIA_TOTAL = 0.5;
   }
}

// =====================================================
// ==                   Probabilística                  ==
// =====================================================


float Poda_AlfaBeta_Probabilistica(const Parchis &actual, int jugador, int profundidad, int profundidad_max,color &c_piece, int &id_piece, int &dice,float alpha, float beta, Heuristic *heuristica,float epsilon_prune) { // Nuevo parámetro epsilon

   // if (profundidad == profundidad_max || actual.gameOver()) {
   //    return heuristica->evaluate(actual, jugador);
   // }

   // PruebaImprimirVariables(); // Imprime las variables de la heurística,es para una prueba de depuración

   if (actual.gameOver()) { // Si la partida realmente ha terminado
      return heuristica->evaluate(actual, jugador);
   }
  if (profundidad == profundidad_max) { // Límite de profundidad principal alcanzado
      return BusquedaQuietud(actual, jugador, alpha, beta, heuristica, 0, MAX_PROFUNDIDAD_QUIETUD);
   }

   bool es_nodo_max = (actual.getCurrentPlayerId() == jugador);
   float valor_nodo_actual = es_nodo_max ? menosinf : masinf;

   ParchisBros hijos = actual.getChildren(); // Para la versión sin ordenación de movimientos.

   if (hijos.begin() == hijos.end() && profundidad < profundidad_max && !actual.gameOver()) {
      return heuristica->evaluate(actual, jugador);
   }

   for (ParchisBros::Iterator it = hijos.begin(); it != hijos.end(); ++it) {
      if (NodeCounter::isLimitReached()) {
         return (es_nodo_max ? (valor_nodo_actual == menosinf ? heuristica->evaluate(actual, jugador) : valor_nodo_actual) : (valor_nodo_actual == masinf ? heuristica->evaluate(actual, jugador) : valor_nodo_actual));
      }

      Parchis estado_hijo = *it;

      // Llamada recursiva (pasando epsilon también, aunque no se usa en niveles más profundos
      float valor_hijo = Poda_AlfaBeta_Probabilistica(estado_hijo, jugador, profundidad + 1, profundidad_max,c_piece, id_piece, dice,alpha, beta, heuristica, epsilon_prune);

      if (es_nodo_max) {
         if (valor_hijo > valor_nodo_actual) {
            valor_nodo_actual = valor_hijo;
            if (profundidad == 0) {
               c_piece = it.getMovedColor();
               id_piece = it.getMovedPieceId();
               dice = it.getMovedDiceValue();
            }
         }
         alpha = max(alpha, valor_nodo_actual);

         /* --- Condición de Poda Modificada ---
         Poda estándar: beta <= alpha
         Poda probabilística: si beta no es "suficientemente mejor" que alpha, podamos.
         "Suficientemente mejor" significa beta > alpha + epsilon_prune
         Por lo tanto, podamos si beta <= alpha + epsilon_prune*/

         if (beta <= alpha + epsilon_prune) { // (concepto de umbral y condición)
            // cout << "Poda Prob. MAX: beta(" << beta << ") <= alpha(" << alpha << ") + eps(" << epsilon_prune << ")" << endl;
            break;
         }
      } else { // Nodo MIN
         if (valor_hijo < valor_nodo_actual) {
            valor_nodo_actual = valor_hijo;
         }
         beta = min(beta, valor_nodo_actual);

         if (beta <= alpha + epsilon_prune) { //(concepto de umbral y condición)
            // cout << "Poda Prob. MIN: beta(" << beta << ") <= alpha(" << alpha << ") + eps(" << epsilon_prune << ")" << endl;
            break;
         }
      }
   }
   return valor_nodo_actual;
}

// =====================================================
// ==                   Combinación de Poda                  ==
// =====================================================

float Poda_AlfaBeta_Probabilistica2_Ordenada_Dinamica(const Parchis &actual, int jugador, int profundidad, int profundidad_max, color &c_piece, int &id_piece, int &dice, float alpha, float beta, Heuristic *heuristica, float epsilon_prune) {

   if (actual.gameOver()) {
      return heuristica->evaluate(actual, jugador);
   }

   if (profundidad == profundidad_max) {
      return BusquedaQuietud(actual, jugador, alpha, beta, heuristica, 0, MAX_PROFUNDIDAD_QUIETUD);
   }

   bool esMax = (actual.getCurrentPlayerId() == jugador);
   float valor_actual = esMax ? menosinf : masinf;

   vector<ParchisSis> hijos = actual.getChildrenList();

   if (hijos.empty()) {
      return heuristica->evaluate(actual, jugador);
   }

   if (profundidad == 0) {
      sort(hijos.begin(), hijos.end(), [&](const ParchisSis &a, const ParchisSis &b) {
         float va = heuristica->evaluate(*a, jugador);
         float vb = heuristica->evaluate(*b, jugador);
         return va > vb;
      });
   }

   int nueva_profundidad_max = profundidad_max;
   if (profundidad == 0) {
      int ramificacion = hijos.size();
      if (ramificacion <= UMBRAL_RAM_BAJA) {
         nueva_profundidad_max = min(profundidad_max + 1, 10);
      } else if (ramificacion >= UMBRAL_RAM_ALTA) {
         nueva_profundidad_max = max(profundidad_max - 1, 3);
      }
   }

   for (const auto &hijo : hijos) {
      if (NodeCounter::isLimitReached()) {
         return (esMax ? (valor_actual == menosinf ? heuristica->evaluate(actual, jugador) : valor_actual): (valor_actual == masinf ? heuristica->evaluate(actual, jugador) : valor_actual));
      }

      float valor_hijo = Poda_AlfaBeta_Probabilistica2_Ordenada_Dinamica(*hijo, jugador, profundidad + 1, nueva_profundidad_max, c_piece, id_piece, dice, alpha, beta, heuristica, epsilon_prune);

      if (esMax) {
         if (valor_hijo > valor_actual) {
               valor_actual = valor_hijo;
               if (profundidad == 0) {
                  c_piece  = hijo.getMovedColor();
                  id_piece = hijo.getMovedPieceId();
                  dice     = hijo.getMovedDiceValue();
               }
         }
         alpha = max(alpha, valor_actual);
         if (beta <= alpha + epsilon_prune) break;
      } else {
         if (valor_hijo < valor_actual) {
               valor_actual = valor_hijo;
         }
         beta = min(beta, valor_actual);
         if (beta <= alpha + epsilon_prune) break;
      }
   }
   return valor_actual;
}


//==================================================Heurística Variada de Prueba==========================================

float PruebaH::getHeuristic(const Parchis& estado, int jugador) const {
   int ganador = estado.getWinner();
   int oponente = (jugador + 1) % 2;

   if (ganador == jugador) {
         return gana;
   } else if (ganador == oponente) {
         return pierde;
   } else {
         vector<color> my_colors = estado.getPlayerColors(jugador);
         vector<color> op_colors = estado.getPlayerColors(oponente);

         float puntuacion_jugador = 0.0f;
         for (color c : my_colors) {
            for (int i = 0; i < num_pieces; ++i) {
               const Box &casilla = estado.getBoard().getPiece(c, i).get_box();

               if (casilla.type == goal) {
                     puntuacion_jugador += 5.0f;
               } else if (estado.isSafePiece(c, i)) {
                     puntuacion_jugador += 1.0f;
               }

               // Mejora 1: distancia a meta 
               float dist = (float)estado.distanceToGoal(c, i);
               puntuacion_jugador += (76.0f - dist) / 76.0f;

               // Mejora 2: penalizar fichas en casa
               if (casilla.type == home) {
                     puntuacion_jugador -= 2.0f;
               }

               // Mejora 3: bonificar final_queue
               if (casilla.type == final_queue) {
                     puntuacion_jugador += 3.0f;
               }
            }
         }

         float puntuacion_oponente = 0.0f;
         for (color c : op_colors) {
            for (int i = 0; i < num_pieces; ++i) {
               const Box &casilla = estado.getBoard().getPiece(c, i).get_box();

               if (casilla.type == goal) {
                     puntuacion_oponente += 5.0f;
               } else if (estado.isSafePiece(c, i)) {
                     puntuacion_oponente += 1.0f;
               }

               // Mejora 1 también para el oponente
               float dist = (float)estado.distanceToGoal(c, i);
               puntuacion_oponente += (76.0f - dist) / 76.0f;

               // Mejora 2: penaliza que tenga fichas en casa
               if (casilla.type == home) {
                     puntuacion_oponente -= 2.0f;
               }

               // Mejora 3: bonus a final_queue también para el oponente
               if (casilla.type == final_queue) {
                     puntuacion_oponente += 3.0f;
               }
            }
         }

         return puntuacion_jugador - puntuacion_oponente;
   }
}



float Poda_AlfaBeta_Mejorada(const Parchis &actual, int jugador, int profundidad, int profundidad_max, color &c_piece, int &id_piece, int &dice, float alpha, float beta, Heuristic *heuristic, float epsilon_prune) {
   // Caso base: nodo terminal o profundidad límite
   if (profundidad == profundidad_max || actual.gameOver()) {
         return heuristic->evaluate(actual, jugador);
   }

   // Recojo hijos en un vector para poder ordenarlos
   vector<ParchisSis> hijos = actual.getChildrenList();

   // Ordenación de movimientos (solo en la raíz)
   if (profundidad == 0) {
         sort(hijos.begin(), hijos.end(), [&](const ParchisSis &a, const ParchisSis &b) {
            float ha = heuristic->evaluate(*a, jugador);
            float hb = heuristic->evaluate(*b, jugador);
            return ha > hb;
         });
   }

   // Profundidad dinámica
   int nueva_profundidad_max = profundidad_max;
   if (profundidad == 0) {
         int n_hijos = hijos.size();
         if (n_hijos <= 4) {
            nueva_profundidad_max = min(profundidad_max + 1, 10);
         } else if (n_hijos >= 12) {
            nueva_profundidad_max = max(profundidad_max - 1, 3);
         }
   }

   bool es_max = (actual.getCurrentPlayerId() == jugador);
   float valor = es_max ? menosinf : masinf;

   for (const auto &hijo_sis : hijos) {
         if (NodeCounter::isLimitReached()) {
            if (profundidad == 0) {
               c_piece  = hijo_sis.getMovedColor();
               id_piece = hijo_sis.getMovedPieceId();
               dice     = hijo_sis.getMovedDiceValue();
            }
            return valor;
         }

         Parchis hijo = *hijo_sis;
         float new_val = Poda_AlfaBeta_Mejorada(hijo, jugador, profundidad + 1, nueva_profundidad_max, c_piece, id_piece, dice, alpha, beta, heuristic, epsilon_prune);

         if (es_max) {
            if (new_val > valor) {
               valor = new_val;
               if (profundidad == 0) {
                     c_piece  = hijo_sis.getMovedColor();
                     id_piece = hijo_sis.getMovedPieceId();
                     dice     = hijo_sis.getMovedDiceValue();
               }
            }
            alpha = max(alpha, valor);
            // Poda probabilística
            if (beta <= alpha + epsilon_prune) {
               break;
            }
         } else {
            if (new_val < valor) {
               valor = new_val;
            }
            beta = min(beta, valor);
            // Poda probabilística
            if (beta <= alpha + epsilon_prune) {
               break;
            }
         }
   }
   return valor;
}


// =====================================================
// ==                  Parte Extra                  ==
// =====================================================



void ajustarPesosSegunFaseDePartida(const Parchis &estado, int jugador_IA) {
   int total_fichas_mias_en_meta = 0;
   int total_fichas_oponente_en_meta = 0;

   for (color c : estado.getPlayerColors(jugador_IA)) {
         total_fichas_mias_en_meta += estado.piecesAtGoal(c);
   }
   for (color c : estado.getPlayerColors((jugador_IA + 1) % 2)) {
         total_fichas_oponente_en_meta += estado.piecesAtGoal(c);
   }

   int total_meta = total_fichas_mias_en_meta + total_fichas_oponente_en_meta;

   if (total_meta <= 2) {
         // Inicio de partida: prioriza progresar rápido
         PESO_DISTANCIA_TOTAL = 1.0;
         PESO_FICHA_EN_META = 100.0;
         PESO_VULNERABILIDAD_PROPIA = -10.0;
   } else if (total_meta <= 6) {
         // Medio de partida: equilibrio
         PESO_DISTANCIA_TOTAL = 0.7;
         PESO_FICHA_EN_META = 120.0;
         PESO_VULNERABILIDAD_PROPIA = -20.0;
   } else {
         // Final de partida: máxima prioridad a meta
         PESO_DISTANCIA_TOTAL = 0.5;
         PESO_FICHA_EN_META = 150.0;
         PESO_VULNERABILIDAD_PROPIA = -30.0;
   }
}

// HAY VARIABLES QUE NO SE PONEN CONST PARA QUE SE PUEDAN MODIFICAR, CABE DESTACAR QUE NO SE HAN ELIMINADO ALGUNAS VARIABLES QUE NO SE USAN, PERO SE HAN MANTENIDO POR SI SE QUIEREN USAR EN EL FUTURO, ADEMÁS EL PROFESORADO VE DE ESTA MANERA EL TRABAJO REALIZADO


