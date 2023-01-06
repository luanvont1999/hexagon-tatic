export enum Key {
  TOP = 'top',
  LEFT = 'left',
  RIGHT = 'right',
  DOWN = 'down',
}

type KeyStatus = {
  isPress: boolean;
}

type KeyboardStatus = Record<Key, KeyStatus>
const defaultKeyboardStatus: KeyboardStatus = {
  [Key.TOP]: { isPress: false },
  [Key.LEFT]: { isPress: false },
  [Key.RIGHT]: { isPress: false },
  [Key.DOWN]: { isPress: false },
}

type KeyboardMapping = Record<Key, string[]>
const defaultKeyboardMapping: KeyboardMapping = {
  [Key.TOP]: [ 'KeyW' ],
  [Key.LEFT]: [ 'KeyA' ],
  [Key.RIGHT]: [ 'KeyD' ],
  [Key.DOWN]: [ 'KeyS' ],
}

class Keyboard {
  static keyboardMapping: KeyboardMapping = defaultKeyboardMapping
  static keyboardStatus: KeyboardStatus = defaultKeyboardStatus

  static isPress (key: Key): boolean {
    return this.keyboardStatus[key].isPress
  }

  static bindEvent () {
    window.addEventListener('keydown', this.bindKey)
    window.addEventListener('keyup', this.bindKey)
  }
  static unbindEvent () {
    window.removeEventListener('keydown', this.bindKey)
    window.removeEventListener('keyup', this.bindKey)
  }
  static bindKey (event: KeyboardEvent) {
    const { type, code: keyCode } = event
    const _key = Object.entries(Keyboard.keyboardMapping).find(([ _, value ]) => value.includes(keyCode))
    if (_key) {
      Keyboard.keyboardStatus[_key[0] as keyof KeyboardStatus].isPress = type === 'keydown'
    }
  }
}

export default Keyboard