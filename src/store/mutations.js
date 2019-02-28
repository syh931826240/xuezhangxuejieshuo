import {
  GETBLOGLIST,
  GETBLOGDETAILS,
  GETCOMMENTLIST,
  GETUSER

} from "./mutation_types"

export default {

  [GETBLOGLIST](state,
    bloglist
  ) {
    state.bloglist = bloglist
  },



  [GETBLOGDETAILS](state,
    blogdetails
  ) {
    state.blogdetails = blogdetails
  },


  [GETCOMMENTLIST](state,
    commentlist
  ) {
    state.commentlist = commentlist
  },

  [GETUSER](state,
    userdata
  ) {
    state.user = userdata
  },
}
