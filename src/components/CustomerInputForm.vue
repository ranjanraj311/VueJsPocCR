<template>
<div>
    <form @submit="submit($event)">
        <div class="field">
            <label class="label">{{editAddText}} First Name</label>
            <div class="control">
                <input class="input" v-model="customer.FirstName" type="text" placeholder="First Name" required>
            </div>
        </div>
        <div class="field">
            <label class="label">{{editAddText}} Last Name</label>
            <div class="control">
                <input class="input" v-model="customer.LastName" type="text" placeholder="Last Name" required>
            </div>
        </div>
        <div class="field">
            <label class="label">{{editAddText}} Country</label>
            <div class="control">
                <!-- <select class="input" v-model="customer.country" type="select" placeholder="Select Country" /> -->
                <select class="input" v-model="customer.Country" name="country" id="country">
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">U.K</option>
                    <option value="Spain">Spain</option>
                </select>
            </div>
        </div>
        <div class="field">
            <label class="label">{{editAddText}} Date</label>
            <div class="control">
                <input class="input" v-model="currentDate" type="text" disabled>
            </div>
        </div>
        
        <div class="field-body">
            <div class="field is-narrow">
            <label class="label">{{editAddText}} Gender</label>    
            <div class="control">
                <label class="radio">
                <input type="radio" v-model="customer.Gender" value="Male" name='gender' required>
                Male
                </label>
                <label class="radio">
                <input type="radio" v-model="customer.Gender" value="Female" name='gender'>
                Female
                </label>
            </div>
            </div>
        </div>

        <div class="field is-grouped" style="margin-top:20px">
            <div class="control">
                <button class="button is-link">{{editAddText}} Customer</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name:'CustomerInputForm',
    props:['editId'],
    data(){
        return {
            customer:{
                FirstName:'',
                LastName:'',
                Country:'',
                Gender:'',
            }
        }
    },
    watch:{
        editId(val){
            if(val){
                let current = this.$store.state.customers.filter(i => {
                    if(i.Id==val) return true;
                    else false;
                })[0]

                this.customer.FirstName = current.FirstName;
                this.customer.LastName = current.LastName;
                this.customer.Country = current.Country;
                this.customer.Gender = current.Gender;
            }else{
                this.resetFormData()
            }
        }
    },
    computed:{
        currentDate(){
            return new Date().toString();
        },
        editAddText(){
            return this.editId ? "Edit":"Insert";
        }
    },
    methods:{
        resetFormData() {

                this.customer = {
                FirstName:'',
                LastName:'',
                Country:'',
                Gender:'',
                }
        },
        submit(event){
            event.preventDefault();  
            var payload = this.customer;
            payload['Date'] = this.currentDate;
            
            if(!this.editId){
                payload['Id'] =  this.$store.state.customers.length!=0? Math.max(...this.$store.state.customers.map(i => i.Id)) + 1 : 0;
                const customer = {...payload};
                this.$store.dispatch('addCustomer',customer);
                this.resetFormData()
            }else{
                payload['Id'] =   this.editId;
                const customer = {...payload}
                this.$store.dispatch('editCustomer',customer);                
            }
        }
    }
}
</script>