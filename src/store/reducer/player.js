let info = {
  list: [],
  current_music: 0,
  mode: 0,            // 0 单曲    1 顺序   2 随机
  status: 0,          // 0 未播放  1 播放   2 暂停中  3 已结束
  playbackRate: 1,    // 倍速
  a_resource: '',
  i_resource: '',
  global_show: 0,     // 全局显示  0 不显示 1 显示
  playing: {
    id: '',
    name: '',
    cover: '',
    url: '',
    singer: {
      avatar: '',
      name: ''
    },
    currentTime: 0,
    duration: 0,
    timeArr: [],
    lrcArr: []
  }
}

let player = (state = info, action)=>{
  if (typeof state === 'undefined') {
    return state
  }
  switch (action.type) {
    case 'last':
      let last_music = state.current_music > 0 ? state.current_music - 1 : state.current_music
      return Object.assign({}, state, { current_music: last_music })

    case 'next':
      let next_music = state.current_music < state.list.length - 1 ? state.current_music + 1 : state.current_music
      return Object.assign({}, state, { current_music: next_music })

    case 'setPlaying':
      let playingState = Object.assign({}, state)
      playingState.playing = Object.assign({}, state.playing, action.playing)
      return playingState

    case 'setRate':
      let rateState = Object.assign({}, state)
      rateState.playing = Object.assign({}, state.playing, { rate: action.playbackRate })
      return rateState

    case 'setCurrentTime':
      let currentTimeState = Object.assign({}, state)
      currentTimeState.playing = Object.assign({}, state.playing, { currentTime: action.currentTime })
      return currentTimeState

    case 'setDuration':
      let durationState = Object.assign({}, state)
      durationState.playing = Object.assign({}, state.playing, { duration: action.duration })
      return durationState

    case 'setMode':
      return Object.assign({}, state, { mode: action.mode })

    case 'play':
      return Object.assign({}, state, { status: 1 })

    case 'pause':
      return Object.assign({}, state, { status: 2 })

    case 'setPlayer':
      return Object.assign({}, state, action.player)

    default:
      return state;
  }
}

export { player }