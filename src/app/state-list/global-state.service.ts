import { Injectable, computed } from '@angular/core';
import { PartialStateUpdater, patchState, signalState } from '@ngrx/signals';
import { SnackService } from '../demo/service/snacks.sarvice';
interface State {
  data:any[],
  activeTab: number,
  loading: boolean,
}
const defaultState:State = {
  data:[],
  activeTab:0,
  loading: false
}
@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
private userState = signalState<State>(defaultState);
private readonly users = this.userState.data;
private readonly tasks = this.userState.data;

public readonly activeTab = this.userState.activeTab;
public readonly loading = this.userState.loading;

public readonly userList = computed(() => {
  return this.users().filter((user) => user.status ==="active");
})
public readonly numbersOfUsers = computed(() => {
  return this.users().length;
})
public readonly todoList = computed(() => {
  return this.tasks().filter((task) => task.status =="active")
})
public readonly numbersOfTasks = computed(() => {
  return this.tasks().length;
})
  constructor(private readonly service:SnackService) { }

  loadUsers(){
    //call your service that you want.
    //example service
    /*
    this.setLoadingState(true);
    this.service.getUsers(100,null)
    .pipe(
      filter((response:any) => !!response.users),
      map((response:any) => response.users!)
    )
    .subscribe((users:any[]) => {
      patchState(this.userState,{data:items}),
    this.setLoadingState(false);
    })
    */
  }
  private setActiveTab(activeTab:number){
    patchState(this.userState,this.activeTabSetter(activeTab));
  }
  private activeTabSetter(tab:number):PartialStateUpdater<{activeTab:number}> {
    return () => ({activeTab:tab})
  }
  private setLoadingState(isLoading:boolean){
    patchState(this.userState,this.loadingSetter(isLoading));
  }
  private loadingSetter(loading:boolean):PartialStateUpdater<{loading:boolean}>{
    return () => ({loading})
  }
}
