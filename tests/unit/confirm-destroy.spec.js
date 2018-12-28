import ConfirmDeleteButton from '@/components/ConfirmDestroy.vue';
import { localMount } from './support';
import Vue from 'vue';

describe('Confirm Delete Button', () => {
  test('Closes if clicked anywhere else', async () => {
    const w = await localMount(ConfirmDeleteButton);
    w.setData({ buttonFab: true });
    // simulate a click anywhere else
    document.body.click();
    expect(w.vm.buttonFab).toBe(false);
  });
  test('Closes if confirmation button is clicked', async () => {
    const w = await localMount(ConfirmDeleteButton);
    const activatorBtn = w.find('.confirm-delete-activator');
    activatorBtn.trigger('click');
    // click on confirm button
    await Vue.nextTick();
    const confirmBtn = w.find({ ref: 'confirm_btn' });
    confirmBtn.trigger('click');
    expect(w.vm.buttonFab).toBe(false);
  });
  test('Emits "delete" event on click on confirmation button', async () => {
    const w = await localMount(ConfirmDeleteButton);
    w.find('.confirm-delete-activator').trigger('click');
    await Vue.nextTick();
    w.find({ ref: 'confirm_btn' }).trigger('click');
    expect(w.emitted('delete')).toBeTruthy();
  });
});
