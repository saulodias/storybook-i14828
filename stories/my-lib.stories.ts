import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';
import { MyLibModule, MyLibComponent } from 'my-lib';
// To access the compiled library entrypoint   ^
// Run `ng build`, the run npm run storybook

export default {
  title: 'Example/MyLibComponent',
  component: MyLibComponent,
  decorators: [
    moduleMetadata({
      imports: [MyLibModule],
    }),
  ],
} as Meta;

const Template: Story<MyLibComponent> = (args: MyLibComponent) => ({
  props: args,
});

export const MyLib = Template.bind({});
MyLib.args = {
  user: {},
};
