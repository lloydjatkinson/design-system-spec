<template>
    <div class="gap-4">
        <div class="space-x-4 py-2">
            <label for="items">Columns</label>
            <input
                type="range"
                id="items"
                name="items"
                min="0"
                max="12"
                step="1"
                v-model="currentColumns">
            <span class="font-mono">
                {{ columns }}
            </span>
        </div>
        <div class="space-x-4 py-2">
            <label for="gap">Spacing</label>
            <input
                type="range"
                id="gap"
                name="gap"
                min="0"
                max="20"
                step="1"
                v-model="currentGap">
            <span class="font-mono">
                {{ gap }}
            </span>

            <label class="inline-flex items-center">
                <input class="form-radio" type="radio" name="radio-direct" value="0" v-model="currentGapType">
                <span class="ml-2">Gap (Both)</span>
            </label>
            <label class="inline-flex items-center">
                <input class="form-radio" type="radio" name="radio-direct" value="1" v-model="currentGapType">
                <span class="ml-2">Gap X</span>
            </label>
            <label class="inline-flex items-center">
                <input class="form-radio" type="radio" name="radio-direct" value="2" v-model="currentGapType">
                <span class="ml-2">Gap Y</span>
            </label>
        </div>
        <div
            class="grid"
            :class="[gap, columns]">
            <div
                v-for="(item, index) in items"
                :key="index"
                class="bg-green-200 p-4"
                :class="{ 'text-red-500': currentGap <= 0 }">
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, Prop } from 'vue';
import clsx from 'clsx';

import { Gap, GridColumns } from './design-tokens';

type GapTokens = [ gap: Gap, gapX: Gap, gapY: Gap ];
const gapTokens: GapTokens[] = [
    ['gap-0', 'gap-x-0', 'gap-y-0'],
    ['gap-0.5', 'gap-x-0.5', 'gap-y-0.5'],
    ['gap-1', 'gap-x-1', 'gap-y-1'],
    ['gap-1.5', 'gap-x-1.5', 'gap-y-1.5'],
    ['gap-2', 'gap-x-2', 'gap-y-2'],
    ['gap-2.5', 'gap-x-2.5', 'gap-y-2.5'],
    ['gap-3', 'gap-x-3', 'gap-y-3'],
    ['gap-3.5', 'gap-x-3.5', 'gap-y-3.5'],
    ['gap-4', 'gap-x-4', 'gap-y-4'],
    ['gap-5', 'gap-x-5', 'gap-y-5'],
    ['gap-6', 'gap-x-6', 'gap-y-6'],
    ['gap-7', 'gap-x-7', 'gap-y-7'],
    ['gap-8', 'gap-x-8', 'gap-y-8'],
    ['gap-10', 'gap-x-10', 'gap-y-10'],
    ['gap-11', 'gap-x-11', 'gap-y-11'],
    ['gap-12', 'gap-x-12', 'gap-y-12'],
    ['gap-14', 'gap-x-14', 'gap-y-14'],
    ['gap-16', 'gap-x-16', 'gap-y-16'],
    ['gap-20', 'gap-x-20', 'gap-y-20'],
    ['gap-24', 'gap-x-24', 'gap-y-24'],
    ['gap-28', 'gap-x-28', 'gap-y-28'],
];

const availiableColumns: GridColumns[] = [
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',
    'grid-cols-7',
    'grid-cols-8',
    'grid-cols-9',
    'grid-cols-10',
    'grid-cols-11',
    'grid-cols-12',
];

export default defineComponent({
    name: 'SpacingPlayground',

    data: (): {
        itemCount: number;
        currentColumns: number;
        currentGapType: 0 | 1 | 2,
        currentGap: number;
    } => ({
        itemCount: 0,
        currentColumns: 4,
        currentGapType: 0,
        currentGap: 1,
    }),

    computed: {
        items () {
            return 20;
        },

        gap () {
            // return `gap: ${this.chosenGap}rem`;
            return `${ gapTokens[this.currentGap][this.currentGapType] }`;
        },

        columns () {
            return availiableColumns[this.currentColumns];
        }
    },
    
    methods: {
        setCurrentGapType (gapType: '') {

        }
    }
});
</script>