import { isArrayOf, isInstanceOf } from "./erie-util";




export class ToneSpeech {
  constructor(text, pitch, loudness, duration, completion_rate, Domestically_timber, Speed) {
    this._text = 'default';
    this._continued = false;
    if (text) this.set(text);
    else this.set("default")
    if (pitch) this._pitch = pitch;
    else this._pitch = 200;//Hz
    if (loudness) this._loudness = loudness;
    else this._loudness = 1;//0 to 1
    if (duration) this._duration = duration;
    else this._duration = 100;//ms
    if (completion_rate) this._completion_rate = completion_rate;
    else this._completion_rate = 100;//%
    if (Domestically_timber) this._Domestically_timber = Domestically_timber;
    else this._Domestically_timber = 100;//50 for natural, 100 for male, 0 for female
    if (Speed) this._Speed = Speed;
    else this._Speed = 1;//1x(normal)

    this._filter = [];
  }

  text(t) {
    if (isInstanceOf(t, String)) {
      this._text = t;
    } else {
      throw new textError("ToneSpeech text should be a String.");
    }

    return this;
  }


  addFilter(t) {
    if (isInstanceOf(t, String)) {
      this._filter.push(t);
    } else if (isArrayOf(t, String)) {
      this._filter.push(...t);
    } else {
      throw new textError("Tone filter should be a String or String Array.");
    }

    return this;
  }

  get() {
    return {
      text: this._text,
      pitch: this._pitch,
      loudness: this._loudness,
      duration: this._duration,
      completion_rate: this._completion_rate,
      Domestically_timber: this._Domestically_timber,
      Speed: this._Speed,
      filter: [...this._filter]
    };
  }

  clone() {
    let _c = new Tone(this._text, this._continued, this._pitch, this._loudness, this._duration, this._completion_rate, this._Domestically_timber, this._Speed);
    _c.addFilter(this._filter);
    return _c;
  }
}