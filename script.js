new Vue({
  el: "#app",
  vuetify: new Vuetify(),

  data() {
    return {
      courses: [
        // Array of courses to be displayed
        { title: "HTML5", time: 10 },
        { title: "CSS3", time: 9 },
        { title: "JavaScript", time: 8 },
        { title: "PHP", time: 10 },
        { title: "Python", time: 10 },
        { title: "Ruby", time: 10 },
        { title: "C#", time: 10 },
        { title: "C++", time: 10 },
        // { title: "Java", time: 10 },
        // { title: "Swift", time: 10 },
        // { title: "Go", time: 10 },
        // { title: "Rust", time: 10 },
        // { title: "Kotlin", time: 10 },
        // { title: "Dart", time: 10 },
        // { title: "Scala", time: 10 },
        // { title: "Haskell", time: 10 },
        // { title: "Elixir", time: 10 },
        // { title: "Clojure", time: 10 },
        // { title: "Erlang", time: 10 },
        // { title: "F#", time: 10 },
        // { title: "R", time: 10 },
        // { title: "Julia", time: 10 },
        // { title: "Lua", time: 10 },
        // { title: "Perl", time: 10 },
        // { title: "Groovy", time: 10 },
        // { title: "Lisp", time: 10 },
        // { title: "Pascal", time: 10 },
        // { title: "Fortran", time: 10 },
        // { title: "Bash", time: 10 },
        // { title: "C", time: 10 },
        // { title: "Assembly", time: 10 },
      ],
      title: "", // Title of the course to be added
      time: 0, // Time of the course to be added
      total: 0, // Total time of all courses
      show: false, // Show the form to add a course
      showTotal: false, // Show the total time of all courses
      selectedItem: 1, // Selected item in the menu
    };
  },

  computed: {
    // Return the total time of all courses
    totalTime() {
      let total = 0;
      this.courses.forEach((course) => {
        total += course.time;
      });
      return total;
    },
    // oculta la leyenda "No hay cursos disponibles" si hay cursos
    noCourses() {
      return this.courses.length === 0;
    },
    // convierte time de string a number
    timeNumber() {
      return parseInt(this.time);
    },
  },

  methods: {
    //Un boton con un metodo addCourse (enlazado con v-on) que permita agregar un nuevo courso usando los valores de title y time. El boton debe estar deshabilitado si title o time son vacios.
    addCourse() {
      this.courses.push({ title: this.title, time: this.timeNumber });
    },
    //Un boton con un metodo toggleShow (enlazado con v-on) que permita mostrar u ocultar el formulario para agregar un nuevo curso.
    toggleShow() {
      this.show = !this.show;
    },
    //Un boton con un metodo toggleShowTotal (enlazado con v-on) que permita mostrar u ocultar el total de horas de todos los cursos.
    toggleShowTotal() {
      this.showTotal = !this.showTotal;
    },
    //Un boton con un metodo clearCourses (enlazado con v-on) que permita eliminar todos los cursos.
    clearCourses() {
      this.courses = [];
    },
    //Un boton con un metodo removeCourse (enlazado con v-on) que permita eliminar un curso en particular.
    removeCourse(index) {
      this.courses.splice(index, 1);
    },
    //Un boton con un metodo sortCourses (enlazado con v-on) que permita ordenar los cursos por titulo.
    sortCourses() {
      this.courses.sort((a, b) => (a.title > b.title ? 1 : -1));
    },
    //Un boton con un metodo sortCoursesByTime (enlazado con v-on) que permita ordenar los cursos por tiempo.
    sortCoursesByTime() {
      this.courses.sort((a, b) => a.time - b.time);
    },
  },
});
