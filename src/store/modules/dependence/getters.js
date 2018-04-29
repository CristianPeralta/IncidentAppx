export const getIds = state => {
  let ids = state.dependences.map(el => el._id)
  return ids
}

export const dependences = state => state.dependences

export const dependenceDraft = state => state.dependenceDraft
