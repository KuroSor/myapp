import { createStore } from "vuex";
export default createStore({

  state: () => ({
    fsl: "",
    number: "",
    e_mail: "",
    namecompany: "",
    headerapp:'',
    contentapp:''
  }),

  getters:{
    HEADER(state){
      return state.headerapp;
    }
  }
  
  },
);