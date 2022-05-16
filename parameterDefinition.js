const fs = require('fs');

const baseValues = {
  borderRadiusValue: undefined,
  sizeValue: undefined,
  paddingMarginValues: undefined,
  hueValue: undefined,
  fontFamilyValues: undefined,
  setDurationValue: undefined,
  componentValues : [
    {
      componentName : "Button",
      handlingEvent : "onClick",
      handlerFunction : "testFunction"
    }
  ]
};

/* BORDER-RADIUS */

const borderRadiusValue = baseValues.borderRadiusValue;

const setBorderRadiusValue = () => {
  fs.writeFile(
    './src/scss/01BasicDefinitions/_border-radius.scss',
    borderRadiusValue,
    (error) => {
      if (error) {
        console.error(error);
        return;
      }
    }
  );
};

/* SIZE*/

const sizeValue = baseValues.sizeValue;

const setSizeValue = () => {
  fs.writeFile(
    './src/scss/01BasicDefinitions/_size.scss',
    sizeValue,
    (error) => {
      if (error) {
        console.error(error);
        return;
      }
    }
  );
};

/* PADDING & MARGIN */

const paddingMarginValues = baseValues.paddingMarginValues;

const setPaddingMarginValues = () => {
  fs.writeFile(
    './src/scss/01BasicDefinitions/_padding&margin.scss',
    paddingMarginValues,
    (error) => {
      if (error) {
        console.error(error);
        return;
      }
    }
  );
};

/* HUE */

const hueValue = baseValues.hueValue;

const setHueValue = () => {
  fs.writeFile('./src/scss/01BasicDefinitions/_hue.scss', hueValue, (error) => {
    if (error) {
      console.error(error);
      return;
    }
  });
};

/* FONT FAMILY */

const fontFamilyValues = baseValues.fontFamilyValues;

const setFontFamilyValues = () => {
  fs.writeFile(
    './src/scss/01BasicDefinitions/_fontFamily.scss',
    fontFamilyValues,
    (error) => {
      if (error) {
        console.error(error);
        return;
      }
    }
  );
};

/* DURATION */

const durationValue = baseValues.durationValue;

const setDurationValue = () => {
  fs.writeFile(
    './src/scss/01BasicDefinitions/_duration.scss',
    durationValue,
    (error) => {
      if (error) {
        console.error(error);
        return;
      }
    }
  );
};

/* MAKE A COMPONENT */

/* const componentValues = baseValues.componentValues;

const setComponentValues = (componentName, handlingEvent, handlerFunction) => {
  const componentString = `<${componentName} ${handlingEvent} = {() => ${handlerFunction} } /> `;

  fs.writeFile(
    `./src/customComponents/${componentName}.js`,
    componentString,
    (error) => {
      if (error) {
        console.error(error);
        return;
      }
    }
  );
}; */


if (borderRadiusValue) {
  setBorderRadiusValue();
}

if (sizeValue) {
  setSizeValue();
}

if (paddingMarginValues) {
  setPaddingMarginValues();
}

if (hueValue) {
  setHueValue();
}

if (fontFamilyValues) {
  setFontFamilyValues();
}

if (durationValue) {
  setDurationValue();
}

/* componentValues.forEach((component) => {
  setComponentValues(component.componentName, component.handlingEvent, component.handlerFunction);
});
 */