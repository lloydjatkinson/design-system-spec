<template>
    <div class="gap-4">
        <div class="space-x-4 py-2">
            <label for="padding">Padding</label>
            <input
                type="range"
                id="padding"
                name="items"
                min="0"
                max="20"
                step="1"
                v-model="currentPadding">
            <span class="font-mono">
                {{ padding }}
            </span>
        </div>
        <div class="space-x-4 py-2">
            <label for="margin">Margin</label>
            <input
                type="range"
                id="margin"
                name="margin"
                min="0"
                max="20"
                step="1"
                v-model="currentMargin">
            <span class="font-mono">
                {{ margin }}
            </span>
        </div>
        <div
            class="border-2 border-gray-300">
            <div :class="[margin]">
                <div
                    class="bg-gray-50"
                    :class="[padding]">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Lorem ipsum dolor sit amet?</h3>
                    <div class="mt-2 max-w-xl text-sm text-gray-500">
                        <p> Integer mollis nisl sit amet magna faucibus, tristique egestas dui pretium. Etiam mattis velit sed congue consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                    <div class="mt-5">
                        <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">Understood</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, Prop } from 'vue';
import clsx from 'clsx';

import { Gap, GridColumns, Padding, Margin } from './design-tokens';

const availiablePadding: Padding[] = [
    'p-0',
    'p-0.5',
    'p-1',
    'p-1.5',
    'p-2',
    'p-2.5',
    'p-3',
    'p-3.5',
    'p-4',
    'p-5',
    'p-6',
    'p-7',
    'p-8',
    'p-10',
    'p-11',
    'p-12',
    'p-14',
    'p-16',
    'p-20',
    'p-24',
    'p-28',
];

const availiableMargin: Margin[] = [
    'm-0',
    'm-0.5',
    'm-1',
    'm-1.5',
    'm-2',
    'm-2.5',
    'm-3',
    'm-3.5',
    'm-4',
    'm-5',
    'm-6',
    'm-7',
    'm-8',
    'm-10',
    'm-11',
    'm-12',
    'm-14',
    'm-16',
    'm-20',
    'm-24',
    'm-28',
];

export default defineComponent({
    name: 'PaddingMarginPlayground',

    data: (): {
        currentPadding: number;
        currentMargin: number;
    } => ({
        currentPadding: 4,
        currentMargin: 4,
    }),

    computed: {
        items () {
            return 20;
        },

        padding (): Padding {
            return availiablePadding[this.currentPadding];
        },

        margin (): Margin {
            return availiableMargin[this.currentMargin];
        },
    },
});
</script>