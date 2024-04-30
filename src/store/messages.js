import { create } from 'zustand'
import zukeeper from 'zukeeper'

const useFriendsStore = create(zukeeper((set) => ({
  friendsList: [{name:'Friend 1',id:123}, {name:'Friend 2',id:122}, {name:'Friend 3',id:125}],
  activeFriend:{},
  setActiveFriend: (name) => set((state) => ({ activeFriend: name })),
  messages:[{from:'friend 1',to:123,message:'hello'},{from:'friend 2',to:122,message:'hello'},{from:'friend 3',to:125,message:'hello'}],
  addMessages:(message)=>set((state)=>({messages:[...state.messages,message]}))
})))

window.store=useFriendsStore;

export default useFriendsStore;