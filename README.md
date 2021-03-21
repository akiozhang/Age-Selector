# Age-Selector
滑动尺实现的年龄选择器
## step1
npm install
## step2
确保模拟器或者真机连接
## step3
npm run android 或者  npm run ios
## 在项目中使用

```
import RNSliderRuler from 'react-native-slider-ruler';
          <RNSliderRuler 
            style={{width: '100%', height: 140}}
            minValue={18}
            maxValue={90}
            step={1}
            num={10}
            unit={""}
            defaultValue={18}
            onSelect={(value) => {
            setAge(value)
            }}
          ></RNSliderRuler>
```
