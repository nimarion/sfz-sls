import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Employee } from '~/interfaces/Employee'
import { Sponsor } from '~/interfaces/Sponsors'
import { Project } from '~/interfaces/Project'
import { Lab } from '~/interfaces/Lab'
import { Workshop } from '~/interfaces/Workshop'
import { News } from '~/interfaces/News'
import { BoardMember } from '~/interfaces/BoardMember'

@Module({
  name: 'main',
  stateFactory: true,
  namespaced: true
})
export default class Main extends VuexModule {
  boardMembers: Array<BoardMember> = [];
  news: Array<News> = [];
  sponsors: Array<Sponsor> = [];
  employees: Array<Employee> = [];
  labs: Array<Lab> = [];
  elearning: Array<Workshop> = [];
  projects: Array<Project> = [];
  workshops: Array<Workshop> = [];

  @Mutation
  initialiseStore () {
    const date = new Date().getTime()
    fetch('/vorstand.json')
      .then(response => response.json())
      .then(data => (this.boardMembers = data))
    fetch('/news/news.json?time=' + date)
      .then(response => response.json())
      .then(data => (this.news = data))
    fetch('/sponsors.json')
      .then(response => response.json())
      .then(data => (this.sponsors = data))
    fetch('/employees.json')
      .then(response => response.json())
      .then(data => (this.employees = data))
    fetch('/labs.json?time=' + date)
      .then(response => response.json())
      .then(data => (this.labs = data))
    fetch('/elearning.json?time=' + date)
      .then(response => response.json())
      .then(data => (this.elearning = data))
    fetch('/forschung.json?time=' + date)
      .then(response => response.json())
      .then(data => (this.projects = data))
    fetch('/workshops.json?time=' + date)
      .then(response => response.json())
      .then(data => (this.workshops = data))
  }
}
