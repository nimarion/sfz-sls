export const state = () => {
  return {
    board_members: [],
    news: [],
    sponsors: [],
    employees: [],
    labs: [],
    elearning: [],
    projects: [],
    workshops: []
  };
};

export const actions = {
  init({ commit }) {
    commit("initialiseStore");
  }
};

export const getters = {
  board_members: state => state.board_members,
  news: state => state.news,
  sponsors: state => state.sponsors,
  employees: state => state.employees,
  labs: state => state.labs,
  elearning: state => state.elearning,
  projects: state => state.projects,
  workshops: state => state.workshops
};

export const mutations = {
  initialiseStore(state) {
    var date = new Date().getTime();
    fetch("/vorstand.json")
      .then(response => response.json())
      .then(data => (state.board_members = data));
    fetch("/news/news.json?time=" + date)
      .then(response => response.json())
      .then(data => (state.news = data));
    fetch("/sponsors.json")
      .then(response => response.json())
      .then(data => (state.sponsors = data));
    fetch("/employees.json")
      .then(response => response.json())
      .then(data => (state.employees = data));
    fetch("/labs.json?time=" + date)
      .then(response => response.json())
      .then(data => (state.labs = data));
    fetch("/elearning.json?time=" + date)
      .then(response => response.json())
      .then(data => (state.elearning = data));
    fetch("/forschung.json?time=" + date)
      .then(response => response.json())
      .then(data => (state.projects = data));
    fetch("/workshops.json?time=" + date)
      .then(response => response.json())
      .then(data => (state.workshops = data));
  }
};